import { Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} className="block group">
      <div className="bg-card border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {post.category}
          </Badge>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex justify-between items-center text-xs text-muted-foreground mt-auto pt-4 border-t">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;