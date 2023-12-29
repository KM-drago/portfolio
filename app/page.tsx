export default function Home() {
  return (
    <main>
      <div className="mb-5">
        <h1 className="text-2xl">Hello,</h1>
        <h2 className="text-5xl">I'm Kasun Mendis</h2>
        <p>
          a Final Year Computer Science Undergraduate at <a href="https://ucsc.cmb.ac.lk/">UCSC </a>.
        </p>
        <section className="mt-5 flex justify-left space-x-4">
          <a href="mailto:contact.kasunmendis@gmail.com">
            <button className="shadow-darkocean/10 border-darksmoke hover:border-calmblue text-md dark:hover:border-aqua dark:border-gray-700 text-darkocean dark:text-white block h-auto rounded-lg border-2 pt-2 pb-2 pl-3 pr-3 font-bold shadow-md transition duration-150 dark:bg-zinc-800 sm:hover:scale-105 sm:hover:shadow-lg sm:active:scale-100">Contact Me</button>
          </a>
        </section>
      </div>
      <footer className="m-auto flex h-32 max-w-2xl flex-col">
        <div className="mb-8">
          <p className="text-coolgray text-xs antialiased">© 2024 Kasun Mendis. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
