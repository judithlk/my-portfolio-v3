import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Contact() {
  return (
    <div
      id="contact"
      className="snap-start min-h-screen md:h-screen w-full bg-background flex items-center justify-center border-y border-border py-[10%] md:py-0"
    >
      <div className="w-[85%] pr-[6%] md:pr-[10%] py-[5%] flex flex-col items-end space-y-8 border-b border-card">
        <h2 className="text-text text-4xl font-heading text-end">Contact</h2>
        <div className="flex flex-col items-end space-y-5">
            <p className="font-body text-text-two text-end">Have an idea, role, or project in mind? I would love to hear about it.</p>
            <Link href="mailto:judithyusuf00@gmail.com" className="group font-heading text-text text-2xl hover:text-muted-text flex items-center justify-end gap-1">judithyusuf00@gmail.com
            <GoArrowUpRight
                        size={20}
                        className="
                  shrink-0 self-start mt-[2px]
                  transition-transform duration-300 ease-out
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                "
                      /></Link>
            <div className="flex space-x-3 items-center text-text-two font-body text-xl justify-end">
                 <Link href="https://github.com/judithlk" target="_blank" className="block font-heading hover:text-text">Github</Link>
                 <span>·</span>
            <Link href="https://www.linkedin.com/in/judith-yusuf-b0488a360/" target="_blank" className="block font-heading hover:text-text">LinkedIn</Link>
            </div>
        </div>
    </div>
    </div>
  );
}
