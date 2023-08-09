import Header from "app/components/Header";
import Link from "next/link";
import Head from "next/head";
export default function Projects() {
  return (
    <>
      <head>
        <link rel="icon" type="image/png" href="/mango.png" />
        <title>Projects</title>
      </head>
      <div className="bg-white px-20">
        <nav className="py-10 mb-12 flex justify-between">
          <Header />
        </nav>
        <main>
          <div className="px-20">
            <h2 className = 'text-4xl py-2 font-bold'>Projects</h2>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl font-semibold'>Atlassian</h2>
            <h3 className = 'text-large font-semibold'>May 2023-August 2023</h3>
            <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>I worked in Atlassian&apos;s marketing analytics team, specifically in &quot;land&quot; marketing: understanding how customers
            convert from signups to purchasing Atlasian products. My intern project worked closely with online marketing. I made a self-serve data product tracking Atlassian&apos;s performance in 
            online channels by using Tableau and SQL. I learned best design practices for self-serve data products, data storytelling, and writing efficient SQL code. 
            </p>
            <Link className="underline decoration-sky-500/30 font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl" href="https://mxumary.notion.site/Anchor-performance-dashboard-d19ead0784ed4369a9b83492d1048887">
              See the design case study here.</Link>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl font-semibold'>Computational Social Science Lab</h2>
            <h3 className = 'text-large font-semibold'>February 2023-Present</h3>
            <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>
            At CSSLab, I work in <Link className="underline decoration-sky-500/30 font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl" href="https://css.seas.upenn.edu/project/group-dynamics/">
               high-throughput experiments on group dynamics.</Link> I contribute to the open source platform, Empirica, using React.</p>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl py-2 font-semibold'>Applied Probability Models in Marketing</h2>
            <h3 className = 'text-large font-semibold'>March 2023-April 2023</h3>
            <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>
              Applied Probability Models in Marketing focuses on using probability distributions to model customer behavior. One of my projects involved modeling NFT user adoption on LooksRare and 
              Coinbase. In my project, I modeled potential external covariates, such as outside promotions or the macroeconomy, and duration dependence. See the paper <Link className="underline decoration-sky-500/30 font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl" href="https://docs.google.com/document/d/1jzdyzMwyjbBWZU5YhZRuiVZt3VTfCtcqnN2giNewAbo/edit?usp=sharing">
               here</Link>.
            </p>
          </div>
          <div className="px-20 py-5">
            <h2 className = 'text-xl py-2 font-semibold'>Bank of America</h2>
            <h3 className = 'text-large font-semibold'>June 2022-August 2022</h3>
            <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>
            I worked in the CSOT team (Channels, Onboarding, and Onboarding Technology) on the CashPro product. I had a data engieering/analytics engineering role, where I made ETL pipelines tracking 
            foreign exchange rates and defined new table schemas. Additionally, since I was interested in learning more about web development in Python, I also integrated a Flask app into my team&apos;s Jira application that 
            tracked the estimated amount of time each team member will spend in a given sprint. This was helpful for my product owner for planning task allocation for future sprints.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}