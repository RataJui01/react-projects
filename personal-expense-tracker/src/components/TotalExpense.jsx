import { AiOutlineCalendar } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";

function TotalExpense() {
  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#767676]">Total expense</p>
          <h2 className="mt-1 text-3xl font-semibold text-[#102475]">
            $1,250.00
          </h2>
        </div>
        <div className="rounded-lg bg-[#CFD7F7] p-2 text-[#284DDF]">
          <MdAccountBalanceWallet size={22} />
        </div>
      </div>
      {/* <p className="mt-4 text-sm text-[#5E79E5]">Available for this month</p> */}
    </div>
  );
}

export default TotalExpense;
