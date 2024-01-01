import About from "./components/about";
import Contact from "./components/contact";
import Logo from "./components/logo";
import Projects from "./components/projects";

export default function Home() {
  let gridColor = "bg-gray-100";
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:h-screen gap-10 p-4 lg:p-20 bg-slate-900 overflow-scroll">
        {/* Row 1 */}

        <div className="pt-4 pb-0 pl-4 pr-4 row-span-1 col-span-2 lg:col-span-1 lg:hidden rounded-3xl flex items-center justify-center">
          <Logo />
        </div>

        <div className={`${gridColor} p-4 col-span-2 row-span-11 rounded-3xl`}>
          <About />
        </div>

        <div className={`${gridColor} p-4 col-span-2 lg:col-span-1 row-span-12 rounded-3xl`}>
          <Projects />
        </div>

        {/* Row 2 */}
        <div className={`${gridColor} p-4 row-span-1 col-span-2 lg:col-span-1 rounded-3xl`}>
          <Contact />
        </div>

        <div className="p-4 row-span-1 col-span-2 hidden lg:col-span-1 rounded-3xl lg:flex items-center justify-center">
          <Logo />
        </div>
      </div>
      <p className="text-gray-500 text-center lg:-mt-10 pb-2 lg:pb-0">Copyright © 2024 Kasun Mendis - All right reserved.</p>
    </div>
  );
}
