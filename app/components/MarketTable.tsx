"use client";

import Image from "next/image";
import { COINS, TABLE_HEADERS } from "../constants";
import { useFetch } from "../hooks/useFetch";
import { MarketProps } from "../types";

export default function MarketTable() {
  const { data: result, loading }: any = useFetch("/api/market");

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center gap-[30px]">
        <div className="font-bold text-2xl">Favorit</div>
        <div className="flex overflow-x-auto gap-[24px]">
          {COINS.map((item) => (
            <button
              key={item}
              className={`p-[8px] text-base font-bold cursor-pointer ${
                item === "idr"
                  ? "text-[#E5933A] border-b-4 border-[#E5933A]"
                  : ""
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <table className="mb-[24px] min-w-full text-sm">
        <thead className="border-b border-white/10">
          <tr>
            <th className="py-[24px] text-left">{TABLE_HEADERS.pasangan}</th>
            <th className="py-[24px] text-right">
              {TABLE_HEADERS.hargaTerakhir}
            </th>
            <th className="py-[24px] text-right">
              {TABLE_HEADERS.perubahan24Jam}
            </th>
            {/* Hide on mobile */}
            <th className="py-[24px] text-right hidden md:table-cell">
              {TABLE_HEADERS.tertinggi}
            </th>
            <th className="py-[24px] text-right hidden lg:table-cell">
              {TABLE_HEADERS.kapitalisasiPasar}
            </th>
            <th className="py-[24px] text-right hidden lg:table-cell">
              {TABLE_HEADERS.volume24Jam}
            </th>
          </tr>
        </thead>

        <tbody>
          {!loading &&
            result?.data.map(
              ({
                id,
                isFavorite,
                pair,
                lastPrice,
                change24h,
                highLow24h,
                marketCap,
                volume24h,
              }: MarketProps) => (
                <tr key={id} className="border-b border-white/5">
                  <td className="py-[24px] flex items-center gap-3">
                    <Image
                      src={`/assets/icons/${
                        isFavorite ? "favorite" : "unfavorite"
                      }.svg`}
                      alt="favorite"
                      width={16}
                      height={16}
                    />
                    <span className="font-medium">{pair}</span>
                  </td>

                  <td className="py-4 text-right">{lastPrice}</td>

                  <td
                    className={`py-4 text-right ${
                      change24h.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {change24h}
                  </td>

                  <td className="py-4 text-right hidden md:table-cell">
                    {highLow24h}
                  </td>

                  <td className="py-4 text-right hidden lg:table-cell">
                    {marketCap}
                  </td>

                  <td className="py-4 text-right hidden lg:table-cell">
                    {volume24h}
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
}
