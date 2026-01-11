import Image from "next/image";
import { MarketItemProps } from "../types";

export default function MarketCard({
  pair,
  price,
  change,
  volume,
}: MarketItemProps) {
  const isUp = change > 0;

  return (
    <div className="grid bg-[#0B132280] rounded-2xl p-[16px] w-full">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-normal">{pair}</p>
          <h3 className="text-xl font-bold mt-1">{price}</h3>
        </div>

        <Image
          src={`/assets/images/${isUp ? "up" : "down"}.svg`}
          alt="trending"
          width={126}
          height={44}
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <p
          className={`text-sm font-normal ${
            isUp ? "text-[#6EDC86]" : "text-[#FF3B3B]"
          }`}
        >
          {isUp && "+"}
          {change}%
        </p>

        <p className="text-sm font-bold text-[#959595]">Volume {volume} IDR</p>
      </div>
    </div>
  );
}
