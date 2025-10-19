import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, Heart, Reply } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  avatar?: string;
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "李明",
      content: "这篇文章写得非常好！对React 18的新特性解释得很清楚，特别是并发渲染的部分，让我对这个概念有了更深的理解。",
      date: "2024-01-16",
      likes: 12,
      replies: [
        {
          id: 2,
          author: "王芳",
          content: "同意楼主的看法，我也觉得并发渲染是React 18最激动人心的特性。",
          date: "2024-01-16",
          likes: 5
        }
      ]
    },
    {
      id: 3,
      author: "张伟",
      content: "请问在实际项目中，升级到React 18会遇到哪些兼容性问题？有什么需要注意的地方吗？",
      date: "2024-01-15",
      likes: 8
    }
  ]);

  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");

  const handleSubmitComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: authorName,
        content: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setAuthorName("");
      setAuthorEmail("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-8">评论 ({comments.length})</h3>

      {/* Comment Form */}
      <Card className="mb-8">
        <CardHeader>
          <h4 className="text-lg font-semibold">发表评论</h4>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="您的姓名"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="您的邮箱"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="写下您的评论..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
          />
          <div className="flex justify-end">
            <Button onClick={handleSubmitComment}>
              <MessageCircle className="h-4 w-4 mr-2" />
              发表评论
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={comment.avatar} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-semibold">{comment.author}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {comment.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-1" />
                        {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Reply className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{comment.content}</p>

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-8 space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={reply.avatar} />
                            <AvatarFallback className="text-sm">{reply.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div>
                                <span className="font-medium text-sm">{reply.author}</span>
                                <span className="text-xs text-muted-foreground ml-2">
                                  {reply.date}
                                </span>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Heart className="h-3 w-3 mr-1" />
                                {reply.likes}
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;