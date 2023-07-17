import Link from "next/link";
import Head from "app/components/Head";
export default function Home() {
  return (
    <div>
      <head>
        <link rel="icon" type="image/png" href="/mango.png"></link>
        <title>Mary Xu</title>
      </head>
      <body className="bg-white px-20">
        <Head />
        <main>
            <div className="px-20">
              <h2 className = 'text-4xl py-2 font-large'>Hi, I&apos;m Mary 👋</h2>
              <p className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>
                Currently, I&apos;m a data science intern at Atlassian. I study statistics at The University of Pennsylvania, where I conduct research
                at the <Link className="underline decoration-sky-500/30" href="https://css.seas.upenn.edu/">Computational Social Science Lab</Link>.
              </p>
            </div>
        </main>
      </body>
    </div>
  );
}
