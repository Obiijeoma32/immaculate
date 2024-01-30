import data from "./Images/Chi google Analytics certificate.png";
import project from "./Images/chi google project man certificate.png";

function Certification() {
  return (
    <>
      {/* BIG SCREENS */}
      <div className=" 100:hidden xl:flex w-full py-[56px] gap-[50px] flex flex-col justify-center items-center ">
        <div className="text-zinc-800 text-5xl font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
          <h3>My Certification</h3>
        </div>
        <div className="bg-[#007BFF] bg-opacity-30  w-[1150px] h-[483.93px] p-[50px]  rounded-[20px] justify-start items-start gap-[50px] inline-flex">
          <img src={data} alt="Google Data Analytics Certificate" />
          <img src={project} alt="Google Project Management Certificate" />
        </div>
      </div>
      {/* SMALL SCREENS FROM 100px TO 1024px */}
      <div className=" 100:flex xl:hidden w-full py-[56px] gap-[50px] flex justify-center items-center ">
        <div className=" w-[90%] flex flex-col justify-between items-center">
          <div className="text-zinc-800 text-[34px] w-[260px] font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
            <h3>My Certification</h3>
          </div>
          <div className="bg-[#007BFF] mt-[50px] bg-opacity-30 full h-fit p-[40px]  rounded-[20px]  gap-[50px] flex flex-col justify-between items-center">
            <img src={data} alt="Google Data Analytics Certificate" />
            <img src={project} alt="Google Project Management Certificate" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certification;
