import { Github, Twitter, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">现代博客</h3>
            <p className="text-sm text-muted-foreground">
              分享技术见解，记录学习历程，探索编程世界的无限可能。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">首页</Link></li>
              <li><Link to="/posts" className="text-muted-foreground hover:text-primary transition-colors">所有文章</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">分类</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">关于我</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">热门分类</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/posts?category=前端开发" className="text-muted-foreground hover:text-primary transition-colors">前端开发</Link></li>
              <li><Link to="/posts?category=后端技术" className="text-muted-foreground hover:text-primary transition-colors">后端技术</Link></li>
              <li><Link to="/posts?category=人工智能" className="text-muted-foreground hover:text-primary transition-colors">人工智能</Link></li>
              <li><Link to="/posts?category=开发工具" className="text-muted-foreground hover:text-primary transition-colors">开发工具</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">订阅更新</h4>
            <p className="text-sm text-muted-foreground mb-4">
              获取最新的文章和技术资讯
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
              <button className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2024 现代博客. 用 <Heart className="inline h-4 w-4 text-red-500" /> 制作
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;