import { useToast } from "@/components/ui/use-toast";

export const useToasterUtil = () => {
  const { toast } = useToast();

  const success = (title: string) => {
    toast({
      title,
      className: "bg-green-500 text-white",
    });
  };

  const error = (title: string) => {
    toast({
      title,
      className: "bg-red-500 text-white",
    });
  };

  return { success, error };
};
