import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("w-full max-w-xl px-4 md:px-6 mx-auto", className)}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
