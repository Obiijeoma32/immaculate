function Skills() {
  return (
    <>
      {/* BIG SCREENS */}
      <div className=" 100:hidden xl:flex w-full py-[56px] flex flex-col justify-center items-center ">
        <div className="text-zinc-800 text-5xl font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
          <h3>My Skills</h3>
        </div>
        <div className=" xl:w-[1200px] 2xl:w-[1350px] gap-[40px] mt-[50px] flex flex-wrap justify-between items-center ">
          <div className="w-[300px] flex-grow h-[300px] p-[30px] gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Data Entry</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Efficient and accurate in transforming raw data into organized datasets, enhancing overall data analysis capabilities.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-[30px] gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Data Wrangling</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Expert in transforming and cleaning raw data, utilizing advanced techniques for streamlined analysis.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-[30px] gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Data Statistics</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Proficient in statistical methods and data analysis, extracting meaningful insights to drive informed decision-making.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-10 gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Data Visualization</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Expert in creating compelling visualizations that transform complex data into clear, actionable insights.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-[30px] gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Excel</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Mastering Excel for efficient data manipulation, analysis, and visualization. Uncover insights with precision and speed.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-10 gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">SQL</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Proficient in SQL for effective data querying and manipulation, enhancing data analysis capabilities.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-10 gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Tableau</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Expert in Tableau for creating dynamic and interactive visualizations, translating complex data into insightful stories.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-10 gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Power BI</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Proficient in Power BI for designing interactive dashboards and transforming raw data into meaningful insights.</p>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS FROM 100px TO 1024px */}
      <div className="100:flex xl:hidden w-full py-[56px] flex flex-col justify-center items-center  ">
        <div className="text-zinc-800 text-[34px] font-semibold font-roboto tracking-wide border-b-[5px] pb-[15px]  border-[#007BFF]">
          <h3>My Skills</h3>
        </div>
        <div className=" w-[90%]  gap-[40px] mt-[50px] flex flex-wrap justify-between items-center ">
          <div className="w-[300px] flex-grow h-[300px] p-[30px] gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Data Entry</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Efficient and accurate in transforming raw data into organized datasets, enhancing overall data analysis capabilities.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-[30px] gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Data Wrangling</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Expert in transforming and cleaning raw data, utilizing advanced techniques for streamlined analysis.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-[30px] gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Data Statistics</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Proficient in statistical methods and data analysis, extracting meaningful insights to drive informed decision-making.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-10 gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Data Visualization</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Expert in creating compelling visualizations that transform complex data into clear, actionable insights.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-[30px] gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Excel</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Mastering Excel for efficient data manipulation, analysis, and visualization. Uncover insights with precision and speed.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-10 gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">SQL</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Proficient in SQL for effective data querying and manipulation, enhancing data analysis capabilities.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-10 gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Tableau</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Expert in Tableau for creating dynamic and interactive visualizations, translating complex data into insightful stories.</p>
          </div>
          <div className="w-[300px] flex-grow h-[300px] p-10 gap-[20px] bg-blue-600 bg-opacity-20 rounded-[20px] flex-col justify-start items-center flex">
            <h4 className="text-zinc-800 text-[28px] font-medium font-roboto tracking-tight">Power BI</h4>
            <p className=" text-center text-zinc-600 text-lg font-normal font-montserrat leading-[35px] tracking-tight">Proficient in Power BI for designing interactive dashboards and transforming raw data into meaningful insights.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
