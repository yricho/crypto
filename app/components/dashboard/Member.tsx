import { TABLE_HEADERS_MEMBER } from "@/app/constants";
import { useFetch } from "@/app/hooks/useFetch";
import { MemberProps } from "@/app/types";

const Member = () => {
  const { data: result, loading }: any = useFetch("/api/members");
  const title = "List of Members";
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
                {TABLE_HEADERS_MEMBER.map((header) => {
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
                  { email, username, fullName, isActive, kyc }: MemberProps,
                  index: number
                ) => (
                  <tr key={email} className="border-b border-white/5">
                    <td className="py-4">{index + 1}</td>
                    <td className="py-4">{email}</td>

                    <td className="py-4">{username}</td>

                    <td className="py-4">{fullName}</td>

                    <td className="py-4 text-center">
                      <span
                        className={`p-[8px] rounded-[8px] ${
                          isActive ? "bg-[#0ECB8166]" : "bg-[#FFFFFF66]"
                        }`}
                      >
                        {isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="py-4 text-center">
                      <span className="p-[8px] rounded-[8px] bg-[#FFFFFF66]">
                        {kyc}
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

export default Member;
