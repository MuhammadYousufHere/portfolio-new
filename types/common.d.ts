import { type ReactNode } from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };
