import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Newspaper } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        {/* Decorative element */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Newspaper className="w-20 h-20 text-gold/30" />
            <span className="absolute -top-2 -right-2 font-display text-6xl font-bold text-gold">?</span>
          </div>
        </div>

        {/* 404 headline */}
        <span className="text-gold font-display text-lg">§ Error 404</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-headline mt-2 mb-4">
          Page Not <span className="text-gold">Found</span>
        </h1>
        
        {/* Divider */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
        
        {/* Message */}
        <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
          The page you're looking for seems to have wandered off. 
          Perhaps it's out gathering data or training a model somewhere.
        </p>

        {/* CTA */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 btn-editorial px-6 py-3 font-display text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Chronicle
        </Link>

        {/* Footer note */}
        <p className="mt-12 text-xs text-muted-foreground/60 font-body">
          If you believe this is an error, feel free to reach out.
        </p>
      </div>
    </div>
  );
};

export default NotFound;