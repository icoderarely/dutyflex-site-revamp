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
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 sm:flex-nowrap sm:justify-start sm:text-sm">
            <span>© {year} DutyFlex — a product of Intelligic Solutions</span>
            <a
              href="https://intelligic.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQFr_R3i8VJMNg/company-logo_200_200/company-logo_200_200/0/1630616276056?e=1778716800&v=beta&t=l94CHKZUjoRqObQf1zYphmUtmfE_eyfsX6FkP6B3Ubk"
                alt="Intelligic Solutions"
                className="h-5 w-auto object-contain"
              />
            </a>
          </div>
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
