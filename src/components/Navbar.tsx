import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { DUTYFLEX_LOGO_URL } from "../data/assets";
import { navigation } from "../data/landing";
import { Container } from "./Container";
import { Button } from "./ui/button";

function scrollToId(id: string) {
  const element = document.querySelector(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

type NavbarProps = {
  onOpenDemo?: () => void;
};

export function Navbar({ onOpenDemo }: NavbarProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const resolveSectionHref = (href: string) =>
    location.pathname === "/" ? href : `/${href}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={(event) => {
            setIsOpen(false);

            if (location.pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src={DUTYFLEX_LOGO_URL}
            alt="DutyFlex logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={resolveSectionHref(item.href)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              onClick={(event) => {
                setIsOpen(false);

                if (location.pathname === "/") {
                  event.preventDefault();
                  scrollToId(item.href);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="secondary"
            size="default"
            className="rounded-full px-6 text-sm"
          >
            <a href="https://app.dutyflex.com/login">Login</a>
          </Button>
          <Button
            size="default"
            type="button"
            className="rounded-full px-6 text-sm"
            onClick={() => {
              setIsOpen(false);
              onOpenDemo?.();
            }}
          >
            Book Demo
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={resolveSectionHref(item.href)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                onClick={(event) => {
                  setIsOpen(false);

                  if (location.pathname === "/") {
                    event.preventDefault();
                    scrollToId(item.href);
                  }
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <Button
                asChild
                variant="secondary"
                className="w-full rounded-full text-sm"
              >
                <a
                  href="https://app.dutyflex.com/login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </a>
              </Button>
              <Button
                className="w-full rounded-full text-sm"
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenDemo?.();
                }}
              >
                Book Demo
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
