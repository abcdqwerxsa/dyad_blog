import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommentSection from "@/components/CommentSection";
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
            <h2>引言：为什么是 React 18？</h2>
            <p>
              React 18 是 React 历史上一次里程碑式的更新，其核心目标是为应用带来“并发”（Concurrency）。
              并发模式并非一个全新的概念，但 React 18 将其带入了主流，彻底改变了我们编写高性能、高响应性用户界面的方式。
              本文将深入探讨 React 18 最重要的两个特性：并发渲染（Concurrent Rendering）和自动批处理（Automatic Batching），以及它们如何赋能现代 Web 应用。
            </p>

            <Separator className="my-6" />

            <h2>并发渲染（Concurrent Rendering）的核心机制</h2>
            <p>
              在 React 18 之前，渲染是同步且不可中断的。一旦 React 开始处理状态更新，它就会“霸占”主线程，直到整个组件树渲染完成，这在高负载或慢速设备上会导致明显的卡顿。
            </p>
            <p>
              并发渲染打破了这一限制。它允许 React 同时处理多个状态更新，甚至可以在渲染过程中暂停、恢复或放弃低优先级的渲染任务，从而优先处理用户交互（如输入、点击）。
              这种机制使得应用在处理大量数据更新时，依然能保持流畅的用户体验。
            </p>

            <h3>新的并发 Hooks：useTransition 和 useDeferredValue</h3>
            <p>
              为了让开发者能够利用并发特性，React 18 引入了两个新的 Hook：
            </p>
            <ul>
              <li>
                <strong><code>useTransition</code>:</strong> 允许我们将状态更新标记为“过渡”（Transition）。过渡更新是低优先级的，可以被中断。例如，在用户输入时，我们可以将更新搜索结果的请求标记为过渡，确保输入框的响应速度不受影响。
              </li>
              <li>
                <strong><code>useDeferredValue</code>:</strong> 允许我们延迟更新 UI 的某个部分。它类似于防抖（Debounce），但它与并发模式集成，可以确保延迟的值不会阻塞高优先级的更新。
              </li>
            </ul>

            <Separator className="my-6" />

            <h2>自动批处理（Automatic Batching）的魔力</h2>
            <p>
              批处理（Batching）是将多个状态更新合并成一次重新渲染的过程。这对于性能至关重要，因为它避免了不必要的重复渲染。
            </p>
            <p>
              在 React 18 之前，批处理只发生在 React 事件处理函数内部。例如，在一个 <code>onClick</code> 函数中调用两次 <code>setState</code> 只会触发一次重新渲染。然而，在 Promise、setTimeout 或原生事件处理函数中，每次 <code>setState</code> 都会触发一次渲染。
            </p>
            <p>
              <strong>React 18 实现了自动批处理。</strong> 现在，无论状态更新发生在何处（事件处理、Promise、setTimeout、原生事件），React 都会自动将它们合并，只进行一次重新渲染。这极大地简化了开发者的心智负担，并保证了更好的默认性能。
            </p>

            <Separator className="my-6" />

            <h2>Suspense 的改进与服务端组件（SSR）</h2>
            <p>
              React 18 对 Suspense 进行了重大改进，使其能够更好地与并发模式协同工作。现在，Suspense 不仅可以用于代码分割，还可以用于数据获取。
            </p>
            <p>
              在服务端渲染（SSR）方面，React 18 引入了流式 SSR（Streaming SSR）和选择性水合（Selective Hydration）。这意味着服务器可以先发送 HTML 的非关键部分，让浏览器尽早渲染，同时在后台加载关键数据。当关键数据准备好后，React 会选择性地对页面进行水合，而不是等待整个应用加载完成，从而显著提升了大型应用的加载速度和用户感知性能。
            </p>

            <Separator className="my-6" />

            <h2>总结与展望</h2>
            <p>
              React 18 不仅仅是版本号的升级，它代表了 React 架构的一次深刻变革。并发模式和自动批处理是构建现代、高性能 Web 应用的基石。建议所有 React 开发者尽快拥抱 React 18，并开始探索如何利用这些新特性来优化您的应用的用户体验。
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

        {/* Comments Section */}
        <section className="max-w-4xl mx-auto mt-16">
          <Separator className="mb-8" />
          <CommentSection />
        </section>

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