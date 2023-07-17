import Link from "next/link";
function Head() {
    return (
        <header>
            <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl px-20">Mary Xu</h1>
                <ul className="flex items-center">
                <Link className = "px-5 underline decoration-sky-500/30" href="/about">About</Link>
                <Link className = "px-5 pr-52 underline decoration-sky-500/30" href="https://www.linkedin.com/in/mxumary/">LinkedIn</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Head;