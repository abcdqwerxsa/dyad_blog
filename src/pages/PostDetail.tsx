import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, Eye, Heart, MessageCircle, Share2, ArrowLeft } from "lucide-react";

const PostDetail = () => {
  const post = {
    title: "React 18 新特性深度解析：并发渲染与自动批处理",
    excerpt: "深入了解 React 18 带来的革命性变化，包括并发渲染、自动批处理、Suspense 改进等核心特性。",
    author: "张三",
    date: "2024-01-15",
    readTime: "8 分钟",
    category: "前端开发",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop",
    views: 1234,
    likes: 89,
    comments: 12
  };

  const relatedPosts = [
    {
      title: "TypeScript 5.0 完全指南",
      excerpt: "探索 TypeScript 5.0 的最新特性...",
      date: "2024-01-12",
      readTime: "10 分钟"
    },
    {
      title: "Next.js 性能优化技巧",
      excerpt: "学习如何构建高性能的 Next.js 应用...",
      date: "2024-01-10",
      readTime: "12 分钟"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回文章列表
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Eye className="h-4 w-4 mr-1" />
                {post.views} 次阅读
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <h2>引言</h2>
            <p>
              React 18 是 React 历史上最重要的版本之一，它引入了许多革命性的特性，
              其中最引人注目的就是并发渲染（Concurrent Rendering）和自动批处理（Automatic Batching）。
              这些特性不仅提升了应用的性能，还为开发者提供了更好的用户体验。
            </p>

            <h2>并发渲染（Concurrent Rendering）</h2>
            <p>
              并发渲染是 React 18 的核心特性之一。它允许 React 同时准备多个版本的 UI，
              而不会阻塞主线程。这意味着即使在渲染复杂组件时，用户界面仍然保持响应。
            </p>

            <h3>什么是并发渲染？</h3>
            <p>
              在传统的 React 渲染中，一旦开始渲染，就会一直持续到完成，期间无法中断。
              而并发渲染允许 React 在渲染过程中暂停、恢复或放弃渲染，以响应更高优先级的更新。
            </p>

            <h2>自动批处理（Automatic Batching）</h2>
            <p>
              批处理是指 React 将多个状态更新合并到一个重新渲染中以提高性能。
              在 React 18 之前，只有在 React 事件处理程序中的更新才会被批处理。
              现在，所有更新都会被自动批处理，无论它们来自哪里。
            </p>

            <h2>Suspense 的改进</h2>
            <p>
              React 18 对 Suspense 进行了重大改进，使其更加实用和强大。
              新的 Suspense 支持服务端渲染，并提供了更好的错误边界处理。
            </p>

            <h2>如何升级到 React 18</h2>
            <p>
              升级到 React 18 相对简单。首先，更新你的依赖：
            </p>

            <pre><code>{`npm install react@18 react-dom@18`}</code></pre>

            <p>
              然后，更新你的入口文件：
            </p>

            <pre><code>{`import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);`}</code></pre>

            <h2>总结</h2>
            <p>
              React 18 带来的新特性为现代 Web 应用开发提供了强大的工具。
              并发渲染、自动批处理和改进的 Suspense 让我们能够构建更快、
              更响应的应用。建议开发者尽快升级到 React 18，以充分利用这些新特性。
            </p>
          </div>

          {/* Article Footer */}
          <footer className="border-t pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  {post.likes} 喜欢
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {post.comments} 评论
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  分享
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">前端开发</Badge>
                <Badge variant="outline">JavaScript</Badge>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        <section className="max-w-4xl mx-auto mt-16">
          <Separator className="mb-8" />
          <h2 className="text-2xl font-bold mb-6">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer">
                  {relatedPost.title}
                </h3>
                <p className="text-muted-foreground mb-4">{relatedPost.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {relatedPost.date}
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  {relatedPost.readTime}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PostDetail;