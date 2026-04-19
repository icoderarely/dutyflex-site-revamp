import { Container } from "../components/Container";
import { DUTYFLEX_LOGO_URL } from "../data/assets";
import { footerLinks } from "../data/landing";
import { Link } from "react-router-dom";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-3">
          <img
            src={DUTYFLEX_LOGO_URL}
            alt="DutyFlex logo"
            className="h-7 w-auto object-contain"
          />
          <p className="text-xs text-slate-500 sm:text-sm">
            All rights reserved ® dutyflex.com {year}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 sm:text-sm">
          <Link
            to={footerLinks[0]?.href ?? "/terms"}
            className="transition-colors hover:text-slate-800"
          >
            {footerLinks[0]?.label ?? "Terms and Conditions"}
          </Link>
          <span className="text-slate-400">|</span>
          <Link
            to={footerLinks[1]?.href ?? "/privacy"}
            className="transition-colors hover:text-slate-800"
          >
            {footerLinks[1]?.label ?? "Privacy Policy"}
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
