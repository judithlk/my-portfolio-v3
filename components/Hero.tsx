import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero" className="snap-start h-screen md:h-screen w-full bg-background flex items-center justify-end p-10 px-[10%] relative">
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[10%] pointer-events-none">
  <h1 className="text-[18vw] font-heading text-white/5 select-none">
    ENGINEER
  </h1>
</div>

      <div className="p-5 h-[80%] flex justify-end ">
        <div className="flex flex-col justify-between items-end">
          <div className="space-y-1 flex flex-col items-end">
            <h1 className="text-text text-xl font-body text-end">Frontend Engineer</h1>
            <h1 className="text-text text-7xl font-heading text-end">JUDITH YUSUF</h1>
            <h1 className="text-text-two font-body text-end">
              Crafting fast, thoughtful, user-first experiences for the web.
            </h1>
          </div>
          <div className="flex space-x-4 items-center text-lg justify-end text-muted-text">
            <Link href="mailto:judithyusuf00@gmail.com" target="_blank" className="block font-heading hover:text-text">Email</Link>
            <Link href="https://github.com/judithlk" target="_blank" className="block font-heading hover:text-text">Github</Link>
            <Link href="https://www.linkedin.com/in/judith-yusuf-b0488a360/" target="_blank" className="block font-heading hover:text-text">LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
