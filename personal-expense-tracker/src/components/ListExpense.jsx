import { useState } from "react";
import ItemExpense from "./ItemExpense";

function ListExpense({ items, onDeleteExpense }) {
  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#102475]">Recent expenses</h3>

      {items.length === 0 && (
        <p className="mt-4 text-sm text-[#B0B0B0]">No expenses added yet</p>
      )}

      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <ItemExpense key={it.id} it={it} onDeleteExpense={onDeleteExpense} />
        ))}
      </ul>
    </div>
  );
}

export default ListExpense;
