const SKILLS = [
  "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "Tanstack Query", "MongoDB", "Node.js", "REST APIs", "Framer Motion", "Perfomance-focused UI"
]
export default function About() {
  return (
    <div
      id="about"
      className="snap-start scroll-mt-10 min-h-screen w-full bg-background flex items-center border-y border-border py-[10%] md:py-0"
    >
      <div className="w-[80%] pl-[10%] flex flex-col space-y-16">
        <div className="space-y-8">
          <h2 className="text-text text-4xl font-heading">About Me</h2>
          <div className=" text-text-two space-y-3 font-body text-justify">
            <p>
              I am a frontend engineer who loves turning ideas into engaging,
              user-friendly digital experiences. I care deeply about smooth
              interactions, clean aesthetics, and the little details that make
              products feel effortless and enjoyable to use.
            </p>
            <p>
              My background in Computer Engineering gives me a solid technical
              foundation, which I have built on through hands-on experience in
              freelance, startup, and structured work environments. Although
              frontend is my home base, I enjoy experimenting with backend and
              mobile development in personal projects to keep learning and
              expanding my perspective.
            </p>
          </div>
        </div>
        <div className="border-t border-border ml-[20%]"></div>
        <div className="space-y-6 flex flex-col items-end">
          <h2 className="text-text text-2xl font-heading">Skills</h2>
        <div className="flex flex-wrap items-center text-text-two font-body justify-end">
  {SKILLS.map((skill, index) => (
    <span key={index} className="flex items-center">
      {skill}
      {index < SKILLS.length - 1 && (
        <span className="mx-2">·</span>
      )}
    </span>
  ))}
</div>

        </div>
      </div>
      {/* <div className="hidden md:block text-end md:w-[35%] h-screen bg-card border-b border-b-border">
      </div> */}
    </div>
  );
}
