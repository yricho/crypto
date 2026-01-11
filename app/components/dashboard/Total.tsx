import { useFetch } from "@/app/hooks/useFetch";
import Image from "next/image";

const TotalItem = ({
  label,
  value,
  total,
}: {
  label: string;
  value?: string;
  total: string;
}) => {
  return (
    <div className="flex flex-col w-full gap-[24px] p-[21px] bg-[#13213F66] rounded-[10px]">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/icons/total.svg"
          alt="total"
          width={32}
          height={32}
        />
        <span className="flex whitespace-nowrap font-bold text-xl">
          {label}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-normal text-2xl">{value}</span>
        <span className="font-normal text-base">{total}</span>
      </div>
    </div>
  );
};

export const TotalSection = () => {
  const { data: result }: any = useFetch("/api/stats");
  const numOfMember = result?.data?.members ?? 0;
  const numOfDeposit = result?.data?.deposits ?? 0;
  const numOfWithdraw = 0;
  const numOfVerified = 0;

  const TOTAL = [
    {
      label: "Total Deposit",
      value: "IDR 0",
      total: `${numOfDeposit} Deposit(s)`,
    },
    {
      label: "Total Withdraw",
      value: "IDR 0",
      total: `${numOfWithdraw} Withdraw(s)`,
    },
    { label: "Total Verified KYC", total: `${numOfVerified} Verified` },
    { label: "Total Registration", total: `${numOfMember} Registered` },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-[24px]">
      {TOTAL.map(({ label, value, total }) => (
        <TotalItem key={label} label={label} value={value} total={total} />
      ))}
    </div>
  );
};
