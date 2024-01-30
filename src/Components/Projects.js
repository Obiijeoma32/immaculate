import project1 from "./Images/Project 1.png";
import project2 from "./Images/project 2.png";
import project3 from "./Images/project 3.png";
import project4 from "./Images/Project 4.png";
function Projects() {
  return (
    <>
      {/* BIG SCREENS */}
      <div className=" 100:hidden  xl:flex w-full mt-[56px] flex flex-col  justify-center items-center py-[50px] ">
        <div className="text-zinc-800 text-5xl font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
          <h3>My Projects</h3>
        </div>
        <p className="w-[711px] mt-[30px] text-center text-neutral-400 text-2xl font-normal font-montserrat leading-10 tracking-tight">
          Explore my diverse data analysis projects, each revealing unique insights and solutions. Dive into the details and discover the impact of data-driven decision-making.{" "}
        </p>

        <div className=" mt-[50px] flex xl:w-[1280px]   flex-wrap justify-center items-center   ">
          <img src={project1} alt="Project" />
          <img src={project2} alt="Project" />

          <img src={project3} alt="Project" />
          <img src={project4} alt="Project" />
        </div>
        <a href="https://drive.google.com/drive/folders/1-5V4KBN3545lAd80qOh8sNijD6cfbvM8?usp=drive_link">
          <button className="w-[230px] h-12 px-[30px] py-2.5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex text-center text-white text-2xl font-medium font-roboto tracking-tight">View More</button>
        </a>
      </div>
      {/* SMALL SCREENS FROM 100px TO 1024px */}
      <div className=" 100:flex xl:hidden w-full mt-[56px] justify-center items-center py-[50px]  ">
        <div className="w-[85%} flex flex-col justify-center items-center">
          <div className="text-zinc-800 w-[195px] text-[34px] font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
            <h3>My Projects</h3>
          </div>
          <p className="mt-[30px] mobile:w-[80%] md:w-[50%] text-center text-neutral-400 text-[18px] font-normal font-montserrat leading-10 tracking-tight">
            Explore my diverse data analysis projects, each revealing unique insights and solutions. Dive into the details and discover the impact of data-driven decision-making.{" "}
          </p>
          <div className=" mt-[50px] flex-wrap  flex ">
            <img className=" flex-grow " src={project1} alt="Project" />
            <img className=" flex-grow " src={project2} alt="Project" />

            <img className=" flex-grow " src={project3} alt="Project" />
            <img className=" flex-grow " src={project4} alt="Project" />
          </div>
          <a href="https://drive.google.com/drive/folders/1-5V4KBN3545lAd80qOh8sNijD6cfbvM8?usp=drive_link">
            <button className="w-[230px] h-12 px-[30px] py-2.5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex text-center text-white text-2xl font-medium font-roboto tracking-tight">View More</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
