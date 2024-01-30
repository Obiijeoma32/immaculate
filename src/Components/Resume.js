import resume from "./Images/Chi resume.png";
import res from "./resume.pdf";

function Resume() {
  return (
    <>
      {/* BIG SCREENS */}
      <div className=" 100:hidden xl:flex w-full  p-[50px] flex   justify-center items-center ">
        <div className="gap-[69.5px] xl:w-[1200px] flex justify-between items-center 2xl:max-w-[1300px]">
          <div className="grid gap-[30px]  ">
            <div className="text-zinc-800 w-[270px] text-5xl font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
              <h3>My Resume</h3>
            </div>
            <p className=" text-neutral-400 text-2xl font-normal font-montserrat leading-10 tracking-tight">
              Explore my professional journey, skills, and achievements in detail. Download my resume to gain a comprehensive overview of my expertise in data analysis.{" "}
            </p>
            <a href={res} download>
              <button className="w-[230px] h-12 px-[30px] py-2.5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex text-center text-white text-2xl font-medium font-roboto tracking-tight">
                Download{" "}
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 14.5V4.5M12.5 14.5C11.7998 14.5 10.4915 12.5057 10 12M12.5 14.5C13.2002 14.5 14.5085 12.5057 15 12" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.5 16.5C20.5 18.982 19.982 19.5 17.5 19.5H7.5C5.018 19.5 4.5 18.982 4.5 16.5" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </a>
          </div>
          <img src={resume} alt="My Resume" />
        </div>
      </div>
      {/* SMALL SCREENS FROM 100px TO 1024px */}
      <div className="100:flex xl:hidden w-full py-[56px] flex flex-col justify-center items-center  ">
        <div className="w-[90%]  grid gap-[30px] ">
          <div className="text-zinc-800 text-[34px] w-[200px] font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
            <h3>My Resume</h3>
          </div>
          <p className="md:max-w-[60%]  text-neutral-400 text-[18px] font-normal font-montserrat leading-10 tracking-tight">
            Explore my professional journey, skills, and achievements in detail. Download my resume to gain a comprehensive overview of my expertise in data analysis.{" "}
          </p>
          <a href={res} download>
            <button className="w-[230px] h-12 px-[30px] py-2.5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex text-center text-white text-2xl font-medium font-roboto tracking-tight">
              Download{" "}
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 14.5V4.5M12.5 14.5C11.7998 14.5 10.4915 12.5057 10 12M12.5 14.5C13.2002 14.5 14.5085 12.5057 15 12" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.5 16.5C20.5 18.982 19.982 19.5 17.5 19.5H7.5C5.018 19.5 4.5 18.982 4.5 16.5" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </a>
          <img src={resume} alt="My Resume" />
        </div>
      </div>
    </>
  );
}

export default Resume;
