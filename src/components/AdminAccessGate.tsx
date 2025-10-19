import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface AdminAccessGateProps {
  expectedKey: string;
  onAccessGranted: () => void;
}

const AdminAccessGate: React.FC<AdminAccessGateProps> = ({ expectedKey, onAccessGranted }) => {
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (inputKey === expectedKey) {
      onAccessGranted();
    } else {
      setError("密钥错误，请重试。");
    }
  };

  // 我们强制对话框打开，直到授予访问权限
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Lock className="h-5 w-5 mr-2" />
            需要访问密钥
          </DialogTitle>
          <DialogDescription>
            此页面受保护。请输入管理员密钥以继续发布文章。
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="access-key"
              type="password"
              placeholder="输入密钥"
              className="col-span-4"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full">
            解锁访问
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminAccessGate;