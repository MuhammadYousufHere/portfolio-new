import { type FC, type PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type ComponentWithChildren<P extends {} = {}> = FC<PropsWithChildren<P>>;
