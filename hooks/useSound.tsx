import * as React from 'react';
import {
   type HookOptions,
   type PlayFunction,
   type PlayOptions,
   type ReturnedValue,
} from './hooks.d';

export default function useSound(
   src: string,
   {
      volume = 1,
      playbackRate = 1,
      soundEnabled = true,
      interrupt = false,
   }: HookOptions
) {
   const audio = React.useRef<HTMLAudioElement>(new Audio(src));

   React.useEffect(() => {
      if (audio.current) audio.current.volume = volume;
   }, [volume]);

   React.useEffect(() => {
      audio.current.playbackRate = playbackRate;
   }, [playbackRate]);

   React.useEffect(() => {
      if (audio.current) {
         audio.current.volume = volume;
         audio.current.playbackRate = playbackRate;
      }
   }, [volume, playbackRate]);

   const play: PlayFunction = React.useCallback(
      (options?: PlayOptions) => {
         if (typeof options === 'undefined') {
            throw new Error('options are undefined');
         }

         if (!audio.current || (!soundEnabled && !options.forceSoundEnabled)) {
            return;
         }

         if (interrupt) {
            audio.current.pause();
         }

         if (options.playbackRate) {
            audio.current.playbackRate = options.playbackRate;
         }

         audio.current.play();
      },
      [audio, soundEnabled, interrupt]
   );

   const stop = React.useCallback(() => {
      if (!audio.current) {
         return;
      }
      audio.current.pause();
   }, [audio]);

   const pause = React.useCallback(() => {
      if (!audio.current) {
         return;
      }
      audio.current.pause();
   }, [audio]);

   const returnedValue: ReturnedValue = [
      play,
      {
         audio: audio.current,
         stop,
         pause,
      },
   ];

   return returnedValue;
}

export { useSound };
