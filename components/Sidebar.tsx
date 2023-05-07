/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';

type SideBarState = {
    touchDown?: boolean;
    sidebarOpen?: boolean;
    opening?: boolean;
    progress?: number;
    touchX?: number;
    touchTime?: number;
    lastTouch?: number;
    transitionTime?: number;
    screenWidth?: number;
};
type SettingsProps = {
    sensitivity?: number;
    overlayColor?: string;
    sidebarWidth?: string;
    swipeDistance?: number;
};

type SideBarProps = {
    // eslint-disable-next-line react/require-default-props
    settings?: SettingsProps;
    open: boolean;
    onChange: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
};

function SideBar({
    onChange,
    open = false,
    settings = {
        sensitivity: 50,
        overlayColor: '#000',
        sidebarWidth: '70%',
        swipeDistance: 40,
    },
    children,
}: SideBarProps) {
    const [state, setState] = useState<SideBarState>({
        touchDown: false,
        sidebarOpen: false,
        progress: 0,
        touchX: 0,
        touchTime: 0,
        lastTouch: 0,
        transitionTime: 0,
    });

    const sidebarParent = useRef<HTMLDivElement>(null);
    const sidebarOverlay = useRef<HTMLDivElement>(null);

    const changeSidebarState = useCallback(
        (arg: string, st = {}) => {
            if (arg === 'open') {
                setState({
                    progress: 100,
                    sidebarOpen: true,
                    ...st,
                });
                if (onChange) {
                    onChange(true);
                }
            } else if (arg === 'close') {
                setState({
                    progress: 0,
                    sidebarOpen: false,
                    ...st,
                });
                if (onChange) {
                    onChange(false);
                }
            } else {
                setState(prev => ({ ...prev, st }));
            }
        },
        [onChange]
    );

    const openSidebar = useCallback(() => {
        const remaining = 100 - state.progress!;
        if (sidebarParent.current) {
            sidebarParent.current.style.transitionDuration = `${remaining / 500}s`;
        }
        if (sidebarOverlay.current) {
            sidebarOverlay.current.style.transitionDuration = `${remaining / 500}s`;
        }
        changeSidebarState('open');
    }, [changeSidebarState, state.progress]);

    const closeSidebar = useCallback(() => {
        const remaining = state.progress!;
        if (sidebarParent.current) sidebarParent.current.style.transitionDuration = `${remaining / 250}s`;
        if (sidebarOverlay.current) {
            sidebarOverlay.current.style.transitionDuration = `${remaining / 250}s`;
        }
        changeSidebarState('close');
    }, [changeSidebarState, state.progress]);
    const touchEnd = useCallback(() => {
        const { touchDown, lastTouch, touchX, touchTime, progress } = state;
        if (touchDown) {
            if (progress! > 80) {
                openSidebar();
            } else {
                closeSidebar();
            }
            setState(prev => ({ ...prev, touchDown: false }));
        }

        if (state.lastTouch! > state.touchX!) {
            const time = new Date().getTime() - touchTime!;
            const distance = lastTouch! - touchX!;
            const vel = distance / time;
            if (vel > 0.6) {
                openSidebar();
            }
        }
    }, [closeSidebar, openSidebar, state]);
    const resizeWindow = () => {
        setState(prev => ({ ...prev, screenWidth: window.screen.availWidth }));
    };
    useEffect(() => {
        if (open && !state.sidebarOpen) {
            openSidebar();
        }
        if (!open && state.sidebarOpen) {
            closeSidebar();
        }
        window.addEventListener('touchend', touchEnd);
        window.addEventListener('resize', resizeWindow);
        setState(prev => ({ ...prev, screenWidth: window.screen.availWidth }));
        return () => {
            window.removeEventListener('touchend', touchEnd);
            window.removeEventListener('resize', resizeWindow);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [closeSidebar, open, openSidebar, state.sidebarOpen]);

    return (
        <div
            className="r-swipe-sidebar-container"
            style={{
                position: 'absolute',
            }}
        >
            <div
                className="r-swipe-sidebar"
                ref={sidebarParent}
                style={{
                    position: 'fixed',
                    left: `${state.progress! - 100}%`,
                    width: settings.sidebarWidth,
                    height: '100%',
                    top: 0,
                    zIndex: 9999,
                    transitionProperty: 'left',
                    transitionDuration: `${state.transitionTime!}s`,
                    transitionTimingFunction: 'linear',
                    transform: 'translate3d(0,0,0)',
                    border: '10px solid red',
                }}
            >
                {children}
            </div>
            <div
                className="r-swipe-sidebar-overlay"
                ref={sidebarOverlay}
                role="button"
                tabIndex={-1}
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: state.progress === 0 ? '-100%' : '0%',
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    zIndex: 9998,
                    transitionProperty: 'opacity',
                    transitionDuration: '0s',
                    opacity: `${state.progress! / 200}`,
                }}
                onClick={closeSidebar}
                onKeyPress={e => {
                    if (e.which === 27) closeSidebar();
                }}
            />
        </div>
    );
}

export { SideBar };
