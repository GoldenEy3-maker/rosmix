import { Inter } from "next/font/google";
import NextTopLoading from "nextjs-toploader";
import { Providers } from "../../providers/admin";
import "@/app/styles/_globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <Providers>
      <NextTopLoading height={4} crawl={true} showSpinner={false} />
      <div className={inter.className}>{children}</div>
    </Providers>
  );
}
