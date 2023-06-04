export function Grains() {
   return (
      <svg
         className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
         width="100%"
         height="100%"
      >
         <filter id="pedroduarteisalegend">
            <feTurbulence
               type="fractalNoise"
               baseFrequency="0.80"
               numOctaves="4"
               stitchTiles="stitch"
            />
         </filter>
         <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)" />
      </svg>
   );
}
