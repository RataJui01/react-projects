import { AiOutlinePlus } from "react-icons/ai";

function FormExpense() {
  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#102475]">Add new expense</h3>

      <div className="mt-4 grid grid-cols-1 gap-3">
        <input
          className="w-full rounded-lg border bg-[#F3F3F3] px-4 py-3 text-sm text-[#767676]"
          placeholder="Expense title"
        />
        <input
          className="w-full rounded-lg border bg-[#F3F3F3] px-4 py-3 text-sm text-[#767676]"
          placeholder="Amount"
        />
        <div className="flex items-center justify-between">
          <button
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#284DDF] px-4 py-2 text-white"
            disabled
          >
            <AiOutlinePlus />
            <span className="text-sm">Add expense</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormExpense;
