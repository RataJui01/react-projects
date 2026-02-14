import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function FormExpense({ onAddExpense }) {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [tag, setTag] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!expenseTitle || !amount || !tag) return;

    const id = crypto.randomUUID();
    const newExpense = {
      id,
      title: expenseTitle,
      amount: `$${parseFloat(amount.replace("$", "").replaceAll(",", "")).toFixed(2)}`,
      tag,
    };

    onAddExpense(newExpense);

    setExpenseTitle("");
    setAmount("");
    setTag("");
  }

  return (
    <form
      className="w-full rounded-2xl bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold text-[#102475]">Add new expense</h3>

      <div className="mt-4 grid grid-cols-1 gap-3">
        <input
          className="w-full rounded-lg border bg-[#F3F3F3] px-4 py-3 text-sm text-[#767676]"
          placeholder="Expense title"
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
        />
        <input
          className="w-full rounded-lg border bg-[#F3F3F3] px-4 py-3 text-sm text-[#767676]"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="flex items-center justify-between gap-2">
          <input
            className="w-full flex-1/4 rounded-lg border bg-[#F3F3F3] px-4 py-2.5 text-sm text-[#767676]"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <button
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#284DDF] px-4 py-2 text-white"
            onClick={handleSubmit}
          >
            <AiOutlinePlus />
            <span className="text-sm">Add expense</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormExpense;
