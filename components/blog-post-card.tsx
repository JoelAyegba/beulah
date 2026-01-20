import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  const dateLabel = (() => {
    const d = new Date(post.date);
    return isNaN(d.getTime())
      ? "Date TBD"
      : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  })();

  return (
    <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title || "Blog image"}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{dateLabel}</p>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary-dark">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}