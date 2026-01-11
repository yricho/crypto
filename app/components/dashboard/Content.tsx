import Image from "next/image";

const welcomeMessage = {
  title: "Welcome John Doe",
  subtitle: "How are you today...",
};

const WelcomeSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-2xl">{welcomeMessage.title}</p>
      <p className="font-normal text-base">{welcomeMessage.subtitle}</p>
    </div>
  );
};

const FilterSection = () => {
  return (
    <div>
      <div className="flex gap-[8px] items-center">
        <div>Filter by:</div>
        <select className="bg-white/30 font-normal text-base rounded rounded-[8px] p-[10px]">
          <option value="jan">Januari</option>
          <option value="feb">Februari</option>
        </select>
        <select className="bg-white/30 font-normal text-base rounded rounded-[8px] p-[10px]">
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

const ChartSection = () => {
  return (
    <div className="flex flex-col gap-[24px] bg-[#13213F66] rounded-[20px] flex-1 p-[24px]">
      <p className="font-bold text-base">Bar Chart</p>
      <Image
        src="/assets/images/bar_chart.png"
        alt="chart"
        width={491}
        height={319}
      />
    </div>
  );
};

export { ChartSection, FilterSection, WelcomeSection };
