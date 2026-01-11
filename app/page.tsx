import MarketCards from "./components/MarketCards";
import MarketTable from "./components/MarketTable";
import Navbar from "./components/Navbar";

const headerSection = {
  title: "Pasar",
  subTitle: "Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia",
};

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-[#021545] to-black">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-[28px]">
        <div className="flex flex-col mt-24 md:mt-32 mb-[24px] gap-[24px]">
          <h1 className="text-[40px] font-bold">{headerSection.title}</h1>
          <p className="text-base font-normal mt-1">{headerSection.subTitle}</p>
        </div>
        <MarketCards />
        <MarketTable />
      </main>
    </div>
  );
}
