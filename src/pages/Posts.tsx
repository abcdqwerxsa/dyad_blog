import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const Posts = () => {
  const allPosts = [
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
    },
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

  const categories = ["全部", "前端开发", "后端开发", "JavaScript", "TypeScript", "CSS", "框架技术", "编程语言"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">所有文章</h1>
          <p className="text-muted-foreground">
            探索 {allPosts.length} 篇技术文章，涵盖前端、后端和全栈开发
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="搜索文章标题、内容或作者..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="排序方式" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">最新发布</SelectItem>
                  <SelectItem value="popular">最多阅读</SelectItem>
                  <SelectItem value="trending">热门趋势</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "全部" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" disabled>
              上一页
            </Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">...</Button>
            <Button variant="outline">10</Button>
            <Button variant="outline">
              下一页
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Posts;