import { useState } from "react";
import { Menu, X, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold text-primary">
            现代博客
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              首页
            </a>
            <a href="/posts" className="text-sm font-medium hover:text-primary transition-colors">
              文章
            </a>
            <a href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              分类
            </a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              关于
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="搜索文章..."
                className="pl-10 w-64"
              />
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hidden md:flex"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
            <a href="/" className="block text-sm font-medium hover:text-primary transition-colors">
              首页
            </a>
            <a href="/posts" className="block text-sm font-medium hover:text-primary transition-colors">
              文章
            </a>
            <a href="/categories" className="block text-sm font-medium hover:text-primary transition-colors">
              分类
            </a>
            <a href="/about" className="block text-sm font-medium hover:text-primary transition-colors">
              关于
            </a>
            <div className="pt-3">
              <Input
                type="search"
                placeholder="搜索文章..."
                className="w-full"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;