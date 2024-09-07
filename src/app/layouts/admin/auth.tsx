import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rosmix - Авторизация",
};

export function AuthLayout({ children }: React.PropsWithChildren) {
  return <div>{children}</div>;
}
