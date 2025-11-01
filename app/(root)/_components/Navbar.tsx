"use client";
import Logo from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/themeToggle";
import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/utils/auth-client";
import Link from "next/link";
import { UserDropDown } from "./UserDropDown";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 supports-[backdrop-filter]:bg-background/60:">
      <div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8 space-x-2">
        <Logo />

        {/* Desktop navigation */}
        <nav className=" hidden md:flex md:items-center md:justify-between w-full ">
          <div className="flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className=" flex items-center space-x-4">
            <ThemeToggle />
            {isPending ? null : session ? (
              <UserDropDown
                email={session.user.email}
                name={
                  session?.user.name && session.user.name.length > 0
                    ? session.user.name
                    : session?.user.email.split("@")[0]
                }
                image={
                  session?.user.image ??
                  `https://avater.vercel.sh/${session?.user.email}`
                }
              />
            ) : (
              <>
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>
                <Link href="/login" className={buttonVariants()}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
