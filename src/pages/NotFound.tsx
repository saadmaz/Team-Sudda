import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center pt-24">
      <div className="text-center px-4">
        <div className="font-display font-extrabold text-[8rem] leading-none text-yellow-brand select-none">
          404
        </div>
        <h1 className="heading-md font-display text-navy mt-2">Page Not Found</h1>
        <p className="mt-4 text-muted-foreground max-w-sm mx-auto">
          That page doesn't exist. Let's get you back to a clean space.
        </p>
        <div className="mt-8">
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
