import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BookUser, GitGraph, LucideIcon, Users } from "lucide-react";
import Link from "next/link";

interface featuersProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: featuersProps[] = [
  {
    title: "Comprehensive Courses",
    description:
      "Access a wide range of carefully curated courses designed by indurstry experts.",
    icon: BookOpen,
  },
  {
    title: "Interactive Learning",
    description:
      "Engaged with interactive content, quizzes, and assignments to enhance your learning experience.",
    icon: BookUser,
  },
  {
    title: "Progess Tracking",
    description:
      "Monitor your progess and achivement with detailed analytics and personalized dashboards.",
    icon: GitGraph,
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant community of learners and instructors and instructors to collaborate and share knowledge.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline" className="gap-1.5">
            <span
              className="size-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            ></span>
            The Future of Online Education
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your Learning Experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover a new way to lear with our modern, interactive learning
            management system, Access high-quality courses anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/courses"
            >
              Explore Courses
            </Link>
            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon className="size-8" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </>
  );
}
