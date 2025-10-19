import { useState, useEffect } from "react";
import { Menu, X, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchModal from "@/components/SearchModal";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom"; // 导入 Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  if (!mounted) return null;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-primary">
              现代博客
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                首页
              </Link>
              <Link to="/posts" className="text-sm font-medium hover:text-primary transition-colors">
                文章
              </Link>
              <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">
                分类
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
                关于
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 cursor-pointer" 
                  onClick={toggleSearch}
                />
                <Input
                  type="search"
                  placeholder="搜索文章... (按 /)"
                  className="pl-10 w-64 cursor-pointer"
                  onClick={toggleSearch}
                  readOnly
                />
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hidden md:flex"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <Link to="/" className="block text-sm font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                首页
              </Link>
              <Link to="/posts" className="block text-sm font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                文章
              </Link>
              <Link to="/categories" className="block text-sm font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                分类
              </Link>
              <Link to="/about" className="block text-sm font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                关于
              </Link>
              <div className="pt-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="搜索文章..."
                    className="pl-10 w-full"
                    onClick={toggleSearch}
                    readOnly
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;