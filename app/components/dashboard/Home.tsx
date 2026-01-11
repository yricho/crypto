import { ChartSection, FilterSection, WelcomeSection } from "./Content";
import { TotalSection } from "./Total";

const Home = () => {
  return (
    <div className="p-[20px] md:pr-[40px] flex flex-col">
      <div className="flex md:flex-row flex-col justify-between md:items-center border-b border-[#121B2E] pb-[40px] gap-8">
        <WelcomeSection />
        <FilterSection />
      </div>
      <div className="flex flex-col md:flex-row gap-[24px] pt-[40px]">
        <ChartSection />
        <TotalSection />
      </div>
    </div>
  );
};

export default Home;
