import type {ReactNode} from "react";

import Footer from "./Footer";
import MarketingHeader from "../marketing/MarketingHeader";

type AppShellProps = {
  children: ReactNode;
};

/**
 * Renders the shared public Lumivo application shell.
 *
 * @param {AppShellProps} props Shell content.
 * @return {ReactNode} Global marketing header, page content and footer.
 */
export default function AppShell({
  children,
}: AppShellProps): ReactNode {
  return (
    <>
      <MarketingHeader />

      <div className="min-h-[calc(100vh-144px)]">
        {children}
      </div>

      <Footer />
    </>
  );
}