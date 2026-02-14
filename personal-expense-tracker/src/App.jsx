import TotalExpense from "./components/TotalExpense";
import ListExpense from "./components/ListExpense";
import FormExpense from "./components/FormExpense";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  function addExpense(expense) {
    setItems((prevItems) => [...prevItems, expense]);
  }

  function deleteExpense(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  console.log("$1,000,000".replace("$", "").replaceAll(",", ""));

  return (
    <div className="min-h-screen bg-[#F3F3F3] p-6 font-lexend">
      <header className="mx-auto mb-6 flex max-w-5xl items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#000000]">
          Personal expense tracker
        </h1>
        <div className="text-sm text-[#767676]">Feb 2026</div>
      </header>

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <TotalExpense items={items} />
          <ListExpense items={items} onDeleteExpense={deleteExpense} />
        </div>

        <aside>
          <FormExpense onAddExpense={addExpense} />
        </aside>
      </main>
    </div>
  );
}

export default App;
