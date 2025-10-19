import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, X } from "lucide-react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockPosts: Post[] = [
  { id: 1, title: "React 18 新特性深度解析", excerpt: "并发渲染与自动批处理", category: "前端开发" },
  { id: 2, title: "TypeScript 5.0：模块解析与装饰器", excerpt: "探索 TS 5.0 的最新改进", category: "编程语言" },
  { id: 3, title: "Next.js 性能优化技巧", excerpt: "构建高性能的 Next.js 应用", category: "全栈开发" },
  { id: 4, title: "Node.js 异步编程：从回调到 Async/Await", excerpt: "掌握现代的 Async/Await 模式", category: "后端开发" },
  { id: 5, title: "Kubernetes 基础：容器编排入门", excerpt: "了解 Pods, Deployments 和 Services", category: "DevOps" },
  { id: 6, title: "WebAssembly：浏览器中的高性能计算", excerpt: "打破 JavaScript 的性能瓶颈", category: "前端开发" },
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    // Search logic: filter mock posts based on title or excerpt
    const filtered = mockPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  const handleSelectResult = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  // 调整 DialogContent 样式，使其更像一个命令面板，并确保显示完整
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg w-[90vw] p-0 translate-y-[-25%] top-[10%]">
        <div className="flex items-center border-b px-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="搜索文章..."
            className="border-none shadow-none focus-visible:ring-0 text-base h-14"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <X className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground" onClick={onClose} />
        </div>
        
        <div className="max-h-[400px] overflow-y-auto p-4">
          {query.length > 0 && results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((post) => (
                <li key={post.id}>
                  <Link 
                    to={`/posts/${post.id}`} 
                    onClick={handleSelectResult}
                    className="flex items-center p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <FileText className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium line-clamp-1">{post.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{post.excerpt}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : query.length > 0 ? (
            <p className="text-center text-muted-foreground py-8">未找到匹配的文章。</p>
          ) : (
            <p className="text-center text-muted-foreground py-8">输入关键词开始搜索...</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;