import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div className={cn(" rounded-md bg-slate-100 ", className)} {...props} />
  );
}

export { Skeleton };
