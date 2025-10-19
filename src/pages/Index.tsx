import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredPosts = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              探索现代编程的<span className="text-primary">前沿技术</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              深入浅出地解析 React, TypeScript, Node.js 等热门技术，助您成为顶尖开发者。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/posts">
                  浏览文章
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  了解我们
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">精选文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="link" asChild>
                <Link to="/posts" className="text-lg">
                  查看所有文章 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">我们的优势</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">实时更新</h3>
                <p className="text-muted-foreground">紧跟技术潮流，第一时间提供最新资讯和深度分析。</p>
              </div>
              <div className="text-center p-6 rounded-lg">
                <Code className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">代码实践</h3>
                <p className="text-muted-foreground">提供高质量的代码示例和实战项目，理论与实践相结合。</p>
              </div>
              <div className="text-center p-6 rounded-lg">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">系统教程</h3>
                <p className="text-muted-foreground">从入门到精通的系统化学习路径，帮助您扎实掌握技术。</p>
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