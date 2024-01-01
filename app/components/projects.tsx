export default function Projects() {
  return (
    <div className="p-2 md:p-8">
      <h1 className="text-3xl pb-8">My Work</h1>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-l-4 border-gray-400 transition ease-in-out duration-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">University of Colombo School of Computing Postgraduate Platform</div>
          <div className="collapse-content">
            <p>Admission and Enrollment Platform</p>
            <p className="font-bold">PHP | JavaScript | MySQL | HTML | CSS </p>
            <p>2021</p>
            <p>MVC-based application that handles the Application process, Selection process through to the end of the interview process. Was deployed for the intake of 2022.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-l-4 border-gray-400 transition ease-in-out duration-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Zuplyd</div>
          <div className="collapse-content">
            <p>A dynamicc supply chain management system.</p>
            <p className="font-bold">ReactJS | NodeJS | NestJS | MongoDB | MaterialUI | Auth0</p>
            <p>2022</p>
            <p>A software-as-a-service solution that interconnects all parties involved in a supply chain with the flexibility to set up the distribution structure. Follows microservices architecture and accompanies a non-relational database.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-l-4 border-gray-400 transition ease-in-out duration-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">University of Colombo School of Computing Foundations of IT Platform</div>
          <div className="collapse-content">
            <p>Admission Platform</p>
            <p className="font-bold">NodeJS | NestJS | Prisma ORM | EJS | Passport</p>
            <p>2023</p>
            <p>MVC-based application that handles the Application process of the FIT course of UCSC. Proof of concept.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-l-4 border-gray-400 transition ease-in-out duration-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">History Preservation Approach to Aid in Multivariate Time Series Forecasting</div>
          <div className="collapse-content">
            <p>Research</p>
            <p className="font-bold">TensorFlow| Pandas | scikit-learn | Python</p>
            <p>Ongoing</p>
            <p>Researching on capturing recurrent significant historical events and using the learned knowledge from these events to improve time series forecasting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
