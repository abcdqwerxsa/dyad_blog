import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdminAccessGate from "@/components/AdminAccessGate";

const postSchema = z.object({
  title: z.string().min(5, "标题至少需要 5 个字符"),
  excerpt: z.string().min(10, "摘要至少需要 10 个字符"),
  content: z.string().min(50, "内容至少需要 50 个字符"),
});

type PostFormValues = z.infer<typeof postSchema>;

// 临时密钥，用于在未实现完整认证前保护路由
const ADMIN_SECRET_KEY = import.meta.env.VITE_ADMIN_SECRET_KEY;

const NewPost = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
    },
  });

  const onSubmit = async (values: PostFormValues) => {
    // NOTE: Since we don't have user authentication set up yet, 
    // we are setting author_id to NULL for now.
    // In a real app, you would get the current user's ID here.
    const author_id = null; 

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title: values.title,
          excerpt: values.excerpt,
          content: values.content,
          author_id: author_id,
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting post:", error);
      showError("文章发布失败：" + error.message);
    } else {
      showSuccess("文章发布成功！邮件摘要已发送给订阅者。");
      form.reset();
      // Optionally navigate to the new post detail page
      if (data && data.length > 0) {
        navigate(`/posts/${data[0].id}`);
      }
    }
  };

  if (!ADMIN_SECRET_KEY) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-destructive">错误：未设置 VITE_ADMIN_SECRET_KEY 环境变量。</p>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <AdminAccessGate 
        expectedKey={ADMIN_SECRET_KEY} 
        onAccessGranted={() => setIsAuthorized(true)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">发布新文章</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>标题</FormLabel>
                      <FormControl>
                        <Input placeholder="输入文章标题" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>摘要</FormLabel>
                      <FormControl>
                        <Textarea placeholder="输入文章摘要 (用于邮件和卡片展示)" rows={3} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>内容</FormLabel>
                      <FormControl>
                        <Textarea placeholder="输入文章的详细内容" rows={15} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "发布中..." : "发布文章"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default NewPost;