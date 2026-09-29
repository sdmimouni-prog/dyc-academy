import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ page, onOpen, children }) {
  return <div className={`site-layout ${page}-route`}>
    <Header page={page} onOpen={onOpen} />
    <main>{children}</main>
    <Footer page={page} onOpen={onOpen} />
  </div>;
}
