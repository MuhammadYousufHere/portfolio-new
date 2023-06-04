import type * as React from 'react';

export default function useOnMount(callback: React.EffectCallback): void;

export declare type SpriteMap = {
   [key: string]: [number, number];
};
export interface HookOptions {
   id?: string | number;
   volume?: number;
   playbackRate?: number;
   interrupt?: boolean;
   soundEnabled?: boolean;
   sprite?: SpriteMap;
   onload?: () => void;
}
export interface PlayOptions {
   id?: string;
   forceSoundEnabled?: boolean;
   playbackRate?: number;
}
export declare type PlayFunction = (options: PlayOptions) => void;
export interface ExposedData {
   audio: HTMLAudioElement | null;
   stop: (id?: string) => void;
   pause: (id?: string) => void;
}

export declare type ReturnedValue = [PlayFunction, ExposedData];

export function useSound(
   src: string | string[],
   {
      volume,
      playbackRate,
      soundEnabled,
      interrupt,
      onload,
      ...delegated
   }?: HookOptions
): ReturnedValue;
