import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className="p-10 h-[50vh] flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-7xl mb-4">404</h1>
        <p>Siden blev ikke fundet</p>
        <div className="flex gap-4 justify-center mt-10">
          <Button variant="secondary" asChild>
            <Link href="/">
              <ChevronLeft />
              Hjem
            </Link>
          </Button>
          <Button asChild>
            <Link href="/annoncer">
              Annoncer
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
