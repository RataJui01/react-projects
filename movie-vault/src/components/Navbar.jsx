import Logo from "./Logo";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-[#1F2223] text-white shadow px-4 py-2 flex items-center justify-between gap-8 sm:gap-0">
      <Logo />
      <Search />
    </nav>
  );
}
