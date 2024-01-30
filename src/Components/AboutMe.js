function AboutMe() {
  return (
    <>
      {/* BIG SCREENS */}
      <div className=" 100:hidden xl:flex w-full h-[676px] px-[164px] py-[70px] bg-[#007BFF] bg-opacity-30 flex-col justify-center items-center gap-[50px] inline-flex">
        <div className="text-zinc-800 text-5xl font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
          <h3>About Me</h3>
        </div>
        <div className="w-[1004px] h-[450px] px-[80px] py-[60px] bg-gray-50 rounded-[20px] flex justify-center items-center text-neutral-500 text-2xl font-normal font-montserrat text-center leading-[55px] tracking-tight">
          <p>
            I'm Immaculate Obi, a passionate and resourceful data analyst with a thirst for insights and a drive to turn information into actionable knowledge. While I may be new to the professional world, I'm equipped with a Google Analytics
            Certification and a hunger to learn and contribute. My analytical mind combined with strong communication skills are a powerful asset I bring to any team.
          </p>
        </div>
      </div>
      {/* SMALL SCREENS FROM 100px TO 1024px */}
      <div className="100:flex xl:hidden w-full h-fit  py-[50px] bg-[#007BFF] bg-opacity-30 flex-col justify-center items-center gap-[50px] flex">
        <div className="text-zinc-800 text-[34px] font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
          <h3>About Me</h3>
        </div>
        <div className="w-[85%] h-fit 100:px-[30px] md:px-[80px] py-[60px] bg-gray-50 rounded-[20px] flex justify-center items-center text-neutral-500 text-[18px]  font-normal font-montserrat text-center leading-[44px] tracking-tight">
          <p>
            I'm Immaculate Obi, a passionate and resourceful data analyst with a thirst for insights and a drive to turn information into actionable knowledge. While I may be new to the professional world, I'm equipped with a Google Analytics
            Certification and a hunger to learn and contribute. My analytical mind combined with strong communication skills are a powerful asset I bring to any team.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
