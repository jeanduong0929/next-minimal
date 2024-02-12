import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const DashboardPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Posts</h1>
        <Button>
          <PlusIcon className="w-4 h-4 mr-2" />
          New post
        </Button>
      </div>
      <h2 className="text-lg text-slate-500">Create and manage posts.</h2>
    </div>
  );
};

export default DashboardPage;
