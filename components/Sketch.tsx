export default function Sketch({ gradientGL }: { gradientGL: string }) {
   return (
      <section className="relative h-screen z-0 w-full">
         <iframe
            title="gradient-sketch"
            src={`https://gradient-gl.vercel.app/?gl=${gradientGL}`}
            width="100%"
            height="100%"
            loading="lazy"
         />
      </section>
   );
}
