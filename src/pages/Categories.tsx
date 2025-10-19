import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Code, Palette, Server, Cpu, Database, Globe } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "前端开发",
      description: "HTML、CSS、JavaScript、React、Vue 等前端技术",
      icon: <Code className="h-8 w-8" />,
      postCount: 45,
      color: "bg-blue-500"
    },
    {
      name: "后端技术",
      description: "Node.js、Python、Java、数据库等后端开发",
      icon: <Server className="h-8 w-8" />,
      postCount: 38,
      color: "bg-green-500"
    },
    {
      name: "人工智能",
      description: "机器学习、深度学习、自然语言处理等AI技术",
      icon: <Cpu className="h-8 w-8" />,
      postCount: 22,
      color: "bg-purple-500"
    },
    {
      name: "开发工具",
      description: "Git、Docker、VS Code、开发环境配置等",
      icon: <BookOpen className="h-8 w-8" />,
      postCount: 18,
      color: "bg-orange-500"
    },
    {
      name: "设计相关",
      description: "UI/UX设计、用户体验、界面设计等",
      icon: <Palette className="h-8 w-8" />,
      postCount: 15,
      color: "bg-pink-500"
    },
    {
      name: "数据库",
      description: "MySQL、MongoDB、Redis、数据建模等",
      icon: <Database className="h-8 w-8" />,
      postCount: 12,
      color: "bg-indigo-500"
    },
    {
      name: "网络技术",
      description: "HTTP、网络安全、CDN、API设计等",
      icon: <Globe className="h-8 w-8" />,
      postCount: 8,
      color: "bg-teal-500"
    },
    {
      name: "热门趋势",
      description: "最新技术趋势、行业动态、技术预测等",
      icon: <TrendingUp className="h-8 w-8" />,
      postCount: 25,
      color: "bg-red-500"
    }
  ];

  const featuredCategories = categories.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">文章分类</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            按分类浏览文章，快速找到您感兴趣的技术内容
          </p>
        </div>

        {/* Featured Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">热门分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="mb-4">
                    {category.postCount} 篇文章
                  </Badge>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    查看文章
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-8">所有分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {category.postCount} 篇文章
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button variant="ghost" size="sm" className="group/btn">
                    浏览分类
                    <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 py-12 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">8</h3>
              <p className="text-muted-foreground">个分类</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">183</h3>
              <p className="text-muted-foreground">总文章数</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">15</h3>
              <p className="text-muted-foreground">本周更新</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;