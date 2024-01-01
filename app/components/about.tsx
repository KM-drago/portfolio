export default function About() {
  return (
    <div className="p-2 md:p-8">
      <h1 className="text-xl">Hello, I&apos;m</h1>
      <h2 className="text-5xl">Kasun Mendis,</h2>
      <p>
        an avid and curious learner delving into computer science, constantly refining my skills to embrace the ever-evolving technological landscape. I&apos;m interested in machine learning and game development, and I find joy in unraveling how these domains work. Beyond code, I am partial to minimalistic designs, appreciating the artistry that simplicity can bring to both technology and aesthetics. I&apos;m a Final Year Computer Science Undergraduate finishing up my bachelor&apos;s at <a href="https://ucsc.cmb.ac.lk/">UCSC</a>.
      </p>
      <p className="pt-4">
        <g className="text-xl">Technology</g> I&apos;m familiar with,
      </p>
      <div className="overflow-x-auto">
        <table className="table w-80">
          <tbody>
            {/* row 1 */}
            <tr className="border-none">
              <td>&#9900; Javascript</td>
              <td>&#9900; Typescript</td>
            </tr>
            {/* row 2 */}
            <tr className="border-none">
              <td>&#9900; NodeJS</td>
              <td>&#9900; NestJS</td>
            </tr>
            {/* row 3 */}
            <tr className="border-none">
              <td>&#9900; React</td>
              <td>&#9900; Python</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
