import { Metadata } from "next";
import { Header, Sidebar } from "@/widgets/admin";

export const metadata: Metadata = {
  title: "Rosmix",
};

export function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-svh">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}
