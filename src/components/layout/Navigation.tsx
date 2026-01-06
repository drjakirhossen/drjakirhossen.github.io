import { useState, useEffect } from "react";
import { Brain, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const assetBase = import.meta.env.BASE_URL;
  const [theme, setTheme] = useState<"night" | "day">(() => {
    if (typeof window === "undefined") {
      return "night";
    }

    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "day" ? "day" : "night";
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "day") {
      root.setAttribute("data-theme", "day");
    } else {
      root.removeAttribute("data-theme");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "day" ? "night" : "day"));
  };

  const navItems = [
    { name: "Bio", href: "/bio" },
    { name: "Publications", href: "/publications" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Teaching", href: "/teaching" },
    { name: "Others", href: "/others" },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-3 md:px-4 ${
        isScrolled
          ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-fit"
          : "h-14 bg-[#1B1B1B] w-fit"
      }`}
    >
      <div className="mx-auto h-full">
        <nav className="flex items-center h-full gap-4">
          <Link to="/bio" className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-bold text-base whitespace-nowrap">Dr. Md. Jakir Hossen</span>
          </Link>

          <div className={`hidden md:flex items-center ${isScrolled ? "gap-2" : "gap-3"}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="button-gradient" asChild>
              <a href={`${assetBase}jakir-hossen-cv.pdf`} target="_blank" rel="noopener noreferrer">
                Curriculum Vitae
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-muted-foreground hover:text-muted-foreground hover:bg-transparent p-0 w-4 h-4"
              onClick={toggleTheme}
              aria-label={theme === "day" ? "Switch to night theme" : "Switch to day theme"}
            >
              {theme === "day" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent border-0 shadow-none hover:bg-transparent"
              onClick={toggleTheme}
              aria-label={theme === "day" ? "Switch to night theme" : "Switch to day theme"}
            >
              {theme === "day" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-transparent border-0 shadow-none hover:bg-transparent"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1B1B1B]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    className="button-gradient mt-4"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <a href={`${assetBase}jakir-hossen-cv.pdf`} target="_blank" rel="noopener noreferrer">
                      Curriculum Vitae
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

