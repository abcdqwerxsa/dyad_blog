import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail, Download, Award, BookOpen, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Vue.js", 
    "Docker", "AWS", "MongoDB", "PostgreSQL", "GraphQL"
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "5年+ 开发经验",
      description: "专注于前端和全栈开发"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "150+ 技术文章",
      description: "分享实战经验和最佳实践"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "10K+ 读者",
      description: "帮助开发者成长和进步"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "开源贡献者",
      description: "积极参与开源社区建设"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              你好，我是张三
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              全栈开发工程师 | 技术博主 | 开源爱好者
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              热爱编程，专注于前端开发和用户体验设计。通过这个博客，
              我希望分享我的技术见解和实战经验，帮助更多的开发者成长。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="group" asChild>
                <a href="mailto:example@example.com">
                  <Mail className="h-4 w-4 mr-2" />
                  联系我
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="h-4 w-4 mr-2" />
                下载简历
              </Button>
            </div>

            <div className="flex justify-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:example@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">关于我</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">我的故事</h3>
              <p className="text-muted-foreground mb-4">
                我是一名充满激情的全栈开发工程师，拥有5年以上的开发经验。
                从大学时期开始接触编程，就被创造美好产品的过程深深吸引。
              </p>
              <p className="text-muted-foreground mb-4">
                在职业生涯中，我参与了多个大型项目的开发，从初创公司到知名企业，
                积累了丰富的实战经验。我擅长将复杂的技术问题简化为易懂的解决方案。
              </p>
              <p className="text-muted-foreground">
                除了编程，我还热爱写作和分享。通过这个博客，我希望能够帮助更多的开发者
                解决技术难题，提升技能水平。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">技术栈</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-4">专业领域</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 前端开发（React、Vue、TypeScript）</li>
                <li>• 后端开发（Node.js、Python、数据库）</li>
                <li>• 云服务部署（AWS、Docker、CI/CD）</li>
                <li>• 用户体验设计和优化</li>
                <li>• 开源项目贡献和维护</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">成就与贡献</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">职业经历</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-0.5 h-full bg-border"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold">高级前端工程师</h3>
                <p className="text-muted-foreground mb-2">科技创新公司 | 2021 - 至今</p>
                <p className="text-muted-foreground">
                  负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目的交付。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-0.5 h-full bg-border"></div>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold">全栈开发工程师</h3>
                <p className="text-muted-foreground mb-2">互联网创业公司 | 2019 - 2021</p>
                <p className="text-muted-foreground">
                  参与公司从0到1的产品开发，负责前后端技术选型和核心功能实现。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">前端开发实习生</h3>
                <p className="text-muted-foreground mb-2">知名互联网公司 | 2018 - 2019</p>
                <p className="text-muted-foreground">
                  参与公司官网和管理后台的开发，学习企业级项目的开发流程和规范。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 border-t">
          <h2 className="text-3xl font-bold mb-4">让我们一起成长</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            如果您对我的文章感兴趣，或者想要交流技术问题，欢迎随时联系我
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:example@example.com">
                <Mail className="h-4 w-4 mr-2" />
                发送邮件
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">
                订阅博客
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;