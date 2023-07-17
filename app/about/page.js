import Head from "app/components/Head";
export default function About() {
  return (
    <div>
      <head>
        <link rel="icon" type="image/png" href="/mango.png"></link>
        <title>About me</title>
      </head>
      <body className="bg-white px-20">
        <Head />
        <main>
            <div className="px-20">
              <p>Check out some of my technical work here.</p>
            </div>
        </main>
      </body>
    </div>
  );
}