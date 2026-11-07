import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({
        top: 0,
        behavior: "smooth",
      })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40
        w-12 h-12 rounded-full
        bg-black text-white dark:bg-white dark:text-black
        flex items-center justify-center shadow-lg
        transition-all duration-300
        hover:scale-110
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
        }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}