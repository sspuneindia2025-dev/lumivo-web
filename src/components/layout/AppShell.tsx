import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "calc(100vh - 144px)",
        }}
      >
        {children}
      </main>

      <Footer />
    </>
  );
}