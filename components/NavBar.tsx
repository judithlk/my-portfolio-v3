import Link from "next/link";

export default function NavigationBar() {
    return (
        <div className="hidden md:flexh-screen w-[25%] bg-transparent md:sticky md:top-0">
            <div className="text-muted-text p-10 text-lg space-y-1 italic relative bottom-0">
                <Link href="#" className="block"><h2>01. About</h2></Link>
                <Link href="#" className="block"><h2>02. Experience</h2></Link>
                <Link href="#" className="block"><h2>03. Projects</h2></Link>
            </div>
        </div>
    )
}