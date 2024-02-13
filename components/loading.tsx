import { Loader2Icon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
      <Loader2Icon className="w-16 h-16 animate-spin" />
    </div>
  );
};

export default Loading;
