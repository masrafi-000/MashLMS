import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Code2Icon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-semibold text-xl"
        >
          <span className="p-2 bg-red-600 rounded-xl shadow-2xl transition-all transform hover:scale-105">
            <Code2Icon className="size-6" />
          </span>
          MashLMS.
        </Link>
        {children}

        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our <span className="text-primary underline cursor-pointer">Terms of service</span>{" "}
          and <span className="text-primary underline cursor-pointer">Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
}
