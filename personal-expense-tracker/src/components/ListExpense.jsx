import { AiOutlineDelete } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

function ListExpense() {
  const items = [
    { id: 1, title: "Coffee", amount: "$4.50", tag: "food" },
    { id: 2, title: "Groceries", amount: "$75.20", tag: "shopping" },
    { id: 3, title: "Gym", amount: "$29.00", tag: "health" },
  ];

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#102475]">Recent expenses</h3>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li
            key={it.id}
            className="group flex items-center justify-between rounded-lg border border-transparent bg-[#F3F3F3] p-3 transition-colors hover:border-[#DBDBDB]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5E79E5] text-white">
                {it.title.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-[#102475]">
                  {it.title}
                </div>
                <div className="text-xs text-[#B0B0B0]">{it.tag}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm font-semibold text-[#102475]">
                {it.amount}
              </div>
              <button
                className="cursor-pointer text-[#DBDBDB] transition-colors group-hover:text-[#DF2828]"
                disabled
              >
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListExpense;
