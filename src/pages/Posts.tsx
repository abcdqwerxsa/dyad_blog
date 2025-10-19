import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const mockPosts = [
  {
    id: 1,
    title: "React 18 新特性深度解析",
    excerpt: "深入了解 React 18 带来的并发渲染、自动批处理等核心特性，提升应用性能。",
    author: "张三",
    date: "2024-01-15",
    category: "前端开发",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "TypeScript 5.0：模块解析与装饰器",
    excerpt: "探索 TypeScript 5.0 的最新改进，包括更强大的模块解析和新的装饰器提案。",
    author: "李四",
    date: "2024-01-12",
    category: "编程语言",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Next.js 性能优化技巧",
    excerpt: "学习如何构建高性能的 Next.js 应用，利用 Server Components 和缓存策略。",
    author: "王五",
    date: "2024-01-10",
    category: "全栈开发",
    image: "https://images.unsplash.com/photo-1627398242478-0d471a1f6036?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Node.js 异步编程：从回调到 Async/Await",
    excerpt: "回顾 Node.js 异步编程的历史演变，掌握现代的 Async/Await 模式。",
    author: "赵六",
    date: "2023-12-28",
    category: "后端开发",
    image: "https://images.unsplash.com/photo-1550592704-65263c85d45e?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Kubernetes 基础：容器编排入门",
    excerpt: "初识 Kubernetes，了解 Pods, Deployments 和 Services 的核心概念。",
    author: "钱七",
    date: "2023-12-20",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1618401471353-beac405a9492?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "WebAssembly：浏览器中的高性能计算",
    excerpt: "探索 WebAssembly 如何打破 JavaScript 的性能瓶颈，实现接近原生的速度。",
    author: "孙八",
    date: "2023-12-15",
    category: "前端开发",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
  },
];

const Posts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl font-bold mb-4">所有文章</h1>
        <p className="text-lg text-muted-foreground mb-8">
          深入探索最新的技术趋势和编程实践。
        </p>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="搜索文章标题..." className="pl-10" />
          </div>
          
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="按分类筛选" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有分类</SelectItem>
              <SelectItem value="frontend">前端开发</SelectItem>
              <SelectItem value="backend">后端开发</SelectItem>
              <SelectItem value="devops">DevOps</SelectItem>
              <SelectItem value="language">编程语言</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="按时间排序" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">最新发布</SelectItem>
              <SelectItem value="oldest">最早发布</SelectItem>
              <SelectItem value="popular">最受欢迎</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination (Placeholder) */}
        <div className="flex justify-center mt-12">
          {/* Placeholder for Pagination component */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Posts;