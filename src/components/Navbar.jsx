import { NavLink, Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/project" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50
      border-b border-black/5 dark:border-white/10
      bg-white/80 dark:bg-[#101010]/80 backdrop-blur-xl">

      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20
        flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold tracking-tighter">
          AM<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 hover:text-black dark:hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-100
              dark:hover:bg-white/10 transition"
          >
            {theme === "light"
              ? <Moon size={19} />
              : <Sun size={19} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            className="md:hidden p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}