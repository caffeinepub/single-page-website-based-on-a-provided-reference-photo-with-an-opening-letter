import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
  );

  return (
    <footer className="border-t border-border/40 bg-card/50 py-8 backdrop-blur-sm">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs">© {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
