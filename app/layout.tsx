import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Privacy Dashboard",
  description: "Privacy-first SaaS prototype"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex flex-wrap gap-4 p-4 border-b text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/features">Features</Link>
          <Link href="/security">Security</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/about">About</Link>
          <Link href="/demo">Book Demo</Link>
        </nav>

        <main className="p-4 md:p-10">
          {children}
        </main>
      </body>
    </html>
  );
}
