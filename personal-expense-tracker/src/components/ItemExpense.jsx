import { AiOutlineDelete } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

function ItemExpense({ it, onDeleteExpense }) {
  const amount = parseFloat(it.amount.replace("$", "").replaceAll(",", ""));
  return (
    <li
      key={it.id}
      className="group flex items-center justify-between rounded-lg border border-transparent bg-[#F3F3F3] p-3 transition-colors hover:border-[#DBDBDB]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5E79E5] text-white">
          {it.title.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium text-[#102475]">{it.title}</div>
          <div className="text-xs text-[#B0B0B0]">{it.tag}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-semibold text-[#102475]">{`$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</div>
        <button
          className="cursor-pointer text-[#DBDBDB] transition-colors group-hover:text-[#DF2828]"
          onClick={() => onDeleteExpense(it.id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
}

export default ItemExpense;
