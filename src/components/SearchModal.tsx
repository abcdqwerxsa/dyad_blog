import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Clock, FileText, Tag, User } from "lucide-react";

interface SearchResult {
  id: string;
  type: 'post' | 'category' | 'author';
  title: string;
  description?: string;
  category?: string;
  date?: string;
  readTime?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const mockResults: SearchResult[] = [
    {
      id: '1',
      type: 'post',
      title: 'React 18 新特性深度解析',
      description: '深入了解 React 18 带来的革命性变化...',
      category: '前端开发',
      date: '2024-01-15',
      readTime: '8 分钟'
    },
    {
      id: '2',
      type: 'post',
      title: 'TypeScript 5.0 完全指南',
      description: '探索 TypeScript 5.0 的最新特性...',
      category: '编程语言',
      date: '2024-01-12',
      readTime: '10 分钟'
    },
    {
      id: '3',
      type: 'category',
      title: '前端开发',
      description: 'HTML、CSS、JavaScript、React、Vue 等前端技术'
    },
    {
      id: '4',
      type: 'author',
      title: '张三',
      description: '全栈开发工程师，发表文章 45 篇'
    }
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockResults.filter(result =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'post':
        return <FileText className="h-4 w-4" />;
      case 'category':
        return <Tag className="h-4 w-4" />;
      case 'author':
        return <User className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'post':
        return '文章';
      case 'category':
        return '分类';
      case 'author':
        return '作者';
      default:
        return '';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            搜索文章
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Input
            placeholder="输入关键词搜索文章、分类或作者..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-base"
            autoFocus
          />

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {getIcon(result.type)}
                          <h4 className="font-medium">{result.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {getTypeLabel(result.type)}
                          </Badge>
                        </div>
                        {result.description && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {result.description}
                          </p>
                        )}
                        {result.type === 'post' && (
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            {result.category && (
                              <span>{result.category}</span>
                            )}
                            {result.date && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {result.date}
                              </span>
                            )}
                            {result.readTime && (
                              <span>{result.readTime}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchQuery ? (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>没有找到相关结果</p>
                <p className="text-sm">尝试使用其他关键词</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">热门搜索</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', '前端开发', '性能优化'].map((term) => (
                      <Badge
                        key={term}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setSearchQuery(term)}
                      >
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">最近搜索</h4>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      React Hooks
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      CSS Grid
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              按 <kbd className="px-1 py-0.5 text-xs bg-muted rounded">/</kbd> 快速搜索
            </div>
            <Button variant="outline" size="sm" onClick={onClose}>
              关闭
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;