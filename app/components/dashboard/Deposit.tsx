import { TABLE_HEADERS_DEPOSIT } from "@/app/constants";
import { useFetch } from "@/app/hooks/useFetch";
import { DepositProps } from "@/app/types";

const Deposit = () => {
  const { data: result, loading }: any = useFetch("/api/deposit");
  const title = "List of Deposit";
  return (
    <div className="p-[20px] md:pr-[40px] flex flex-col">
      {!loading && result?.data.length > 0 && (
        <>
          <p className="text-lg font-semibold py-[24px] border-b-1 border-[#121B2E]">
            {title}
          </p>
          <table className="mb-[24px] min-w-full text-sm">
            <thead className="border-b border-white/10">
              <tr>
                {TABLE_HEADERS_DEPOSIT.map((header) => {
                  return (
                    <th
                      key={header}
                      className={`py-[24px] text-${
                        ["Status", "Kyc"].includes(header) ? "center" : "left"
                      }`}
                    >
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {result?.data.map(
                (
                  { depositId, asset, amountNett, status }: DepositProps,
                  index: number
                ) => (
                  <tr key={depositId} className="border-b border-white/5">
                    <td className="py-4">{index + 1}</td>
                    <td className="py-4">{depositId}</td>
                    <td className="py-4">{asset}</td>
                    <td className="py-4">{amountNett}</td>
                    <td className="py-4 text-center">
                      <span
                        className={`p-[8px] rounded-[8px] ${
                          status === "Success"
                            ? "bg-[#0ECB8166]"
                            : "bg-[#F6465D66]"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Deposit;
