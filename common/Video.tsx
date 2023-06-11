import { useVisibilityListener } from '@my/hooks';
import { useCallback, useRef } from 'react';

export interface IVideoProps {
   src: string;
   isMuted?: boolean;
   isLooped?: boolean;
   autoPlay?: boolean;
   showControls?: boolean;
}
export default function Video({
   src,
   isMuted = true,
   isLooped = true,
   autoPlay = true,
   showControls = false,
}: IVideoProps) {
   const videoRef = useRef<HTMLVideoElement | null>(null);

   const handleOnVisible = useCallback(() => {
      videoRef.current?.play();
   }, []);
   const handleOnHidden = useCallback(() => {
      videoRef.current?.pause();
   }, []);

   useVisibilityListener({
      onVisible: handleOnVisible,
      onHidden: handleOnHidden,
   });

   if (!src) return null;

   return (
      <video
         className="h-full w-full"
         ref={videoRef}
         muted={isMuted}
         playsInline={autoPlay}
         autoPlay={autoPlay}
         controls={showControls}
         loop={isLooped}
      >
         <track kind="captions" />
         <source type="video/mp4" src={src} />
      </video>
   );
}
