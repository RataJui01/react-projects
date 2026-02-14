import { AiOutlineCalendar } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";

function TotalExpense({ items }) {
  const total =
    items.length === 0
      ? 0
      : items.reduce((sum, item) => {
          const amount = parseFloat(
            item.amount.replace("$", "").replaceAll(",", ""),
          );
          return sum + amount;
        }, 0);

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#767676]">Total expense</p>
          <h2 className="mt-1 text-3xl font-semibold text-[#102475]">
            {`$${total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          </h2>
        </div>
        <div className="rounded-lg bg-[#CFD7F7] p-2 text-[#284DDF]">
          <MdAccountBalanceWallet size={22} />
        </div>
      </div>
    </div>
  );
}

export default TotalExpense;
