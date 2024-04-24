export default function About() {
  return (
    <div className="p-2 md:p-8">
      <h1 className="text-xl">Hello, I&apos;m</h1>
      <h2 className="text-5xl">Kasun Mendis,</h2>
      <p>
        an avid and curious learner delving into computer science, constantly refining my skills to embrace the ever-evolving technological landscape. I&apos;m interested in machine learning and game development, and I find joy in unraveling how these domains work. Beyond code, I am partial to minimalistic designs, appreciating the artistry that simplicity can bring to both technology and aesthetics. I&apos;m Computer Science graduate at <a href="https://ucsc.cmb.ac.lk/">UCSC</a>.
      </p>
      <p className="pt-4">
        <g className="text-xl">Technology</g> I&apos;m familiar with,
      </p>
      <div className="overflow-x-auto">
        <table className="table w-100">
          <tbody>
            {/* row 1 */}
            <tr className="border-none">
              <td>
                Programming <br /> Python, PHP, JavaScript, TypeScript, C/C++, HTML/CSS, SQL
              </td>
            </tr>
            {/* row 2 */}
            <tr className="border-none">
              <td>
                Technologies <br /> NodeJS, NestJS, ReactJS, TensorFlow, Scikit-learn, Pandas, TailwindCSS, MongoDB, Git, Postman, Figma
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
