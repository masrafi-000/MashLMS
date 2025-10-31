import { Code2Icon } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-2 self-center font-semibold text-xl"
      >
        <span className="p-2 bg-primary rounded-xl shadow-2xl transition-all transform hover:scale-105">
          <Code2Icon className="size-6" />
        </span>
        MashLMS.
      </Link>
    </>
  );
};

export default Logo;
