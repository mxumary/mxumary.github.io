import Link from "next/link";
function Header() {
    return (
        <>
            <Link className="text-xl px-20 font-semibold" href="/">Mary Xu 🥭</Link>
            <ul className="flex items-center">
            <Link className = "px-5 underline decoration-sky-500/30" href="/projects">Projects</Link>
            <Link className = "px-5 underline decoration-sky-500/30" href="/sandbox">Sandbox</Link>
            <Link className = "px-5 pr-52 underline decoration-sky-500/30" href="https://www.linkedin.com/in/mxumary/">LinkedIn</Link>
            </ul>
        </>
    )
}
export default Header;