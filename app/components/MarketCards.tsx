import MarketCard from "./MarketCard";

export default function MarketCards() {
  return (
    <div className="grid md:grid-cols-4 gap-4 overflow-x-auto mb-[40px] sm:flex-wrap">
      <MarketCard
        pair="TKO/IDR"
        price="Rp 5,261.3"
        change={-3.82}
        volume={2.258}
      />
      <MarketCard
        pair="TKO/IDR"
        price="Rp 5,261.3"
        change={-3.82}
        volume={2.258}
      />
      <MarketCard
        pair="TKO/IDR"
        price="Rp 5,261.3"
        change={3.82}
        volume={2.258}
      />
      <MarketCard
        pair="TKO/IDR"
        price="Rp 5,261.3"
        change={3.82}
        volume={2.258}
      />
    </div>
  );
}
