import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, BookOpen, Users } from "lucide-react";

const Index = () => {
  const featuredPosts = [
    {
      title: "React 18 新特性深度解析：并发渲染与自动批处理",
      excerpt: "深入了解 React 18 带来的革命性变化，包括并发渲染、自动批处理、Suspense 改进等核心特性，以及如何在项目中应用这些新功能。",
      author: "张三",
      date: "2024-01-15",
      readTime: "8 分钟",
      category: "前端开发",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    {
      title: "TypeScript 5.0 完全指南：装饰器与性能优化",
      excerpt: "探索 TypeScript 5.0 的最新特性，包括装饰器的正式支持、性能优化、新的类型系统功能，以及如何升级现有项目。",
      author: "李四",
      date: "2024-01-12",
      readTime: "10 分钟",
      category: "编程语言",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
    },
    {
      title: "构建高性能的 Next.js 应用：最佳实践与优化技巧",
      excerpt: "学习如何构建快速、可扩展的 Next.js 应用，包括服务端渲染优化、静态生成策略、图片优化和性能监控等关键技术。",
      author: "王五",
      date: "2024-01-10",
      readTime: "12 分钟",
      category: "框架技术",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    }
  ];

  const recentPosts = [
    {
      title: "深入理解 JavaScript 异步编程：Promise、async/await 与事件循环",
      excerpt: "全面掌握 JavaScript 异步编程的核心概念，从回调函数到 Promise，再到 async/await 的演进历程。",
      author: "赵六",
      date: "2024-01-08",
      readTime: "6 分钟",
      category: "JavaScript"
    },
    {
      title: "CSS Grid 布局完全指南：从基础到高级应用",
      excerpt: "学习 CSS Grid 的强大功能，掌握复杂布局的创建技巧，提升前端开发效率。",
      author: "钱七",
      date: "2024-01-06",
      readTime: "7 分钟",
      category: "CSS"
    },
    {
      title: "Node.js 性能优化：内存管理与并发处理",
      excerpt: "探索 Node.js 应用的性能瓶颈，学习内存泄漏检测、集群模式和负载均衡等优化技术。",
      author: "孙八",
      date: "2024-01-04",
      readTime: "9 分钟",
      category: "后端开发"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4">欢迎来到我的博客</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              分享技术，记录成长
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              探索前端开发的无限可能，分享实用的编程技巧和最佳实践
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                浏览文章
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                订阅更新
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">150+</h3>
                <p className="text-muted-foreground">技术文章</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-muted-foreground">读者</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-muted-foreground">技术教程</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">精选文章</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                深入探讨热门技术话题，分享实战经验和最佳实践
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">最新文章</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                持续更新，分享最新的技术见解和开发经验
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                查看所有文章
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">订阅技术周刊</h2>
              <p className="text-muted-foreground mb-8">
                每周获取精选的技术文章、开发工具和行业资讯
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  className="flex-1 px-4 py-2 border rounded-md"
                />
                <Button>立即订阅</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;