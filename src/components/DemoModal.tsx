import { useEffect, useRef } from "react";
import { X } from "lucide-react";

import { DEMO_MODAL_IMAGE_URL } from "../data/assets";
import { Button } from "./ui/button";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled"));
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open || !dialogRef.current) {
      return;
    }

    const dialogElement = dialogRef.current;
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = getFocusableElements(dialogElement);
    (focusables[0] ?? dialogElement).focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const currentFocusable = getFocusableElements(dialogElement);

      if (currentFocusable.length === 0) {
        event.preventDefault();
        dialogElement.focus();
        return;
      }

      const first = currentFocusable[0];
      const last = currentFocusable[currentFocusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 px-4 py-6 backdrop-blur-sm transition-all duration-200 ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      onMouseDown={(event) => {
        if (open && event.target === event.currentTarget) {
          onClose();
        }
      }}
      aria-hidden={!open}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className={`w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.3)] transition-all duration-200 focus:outline-none ${
          open ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"
        }`}
        tabIndex={-1}
      >
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r lg:p-6">
            <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src={DEMO_MODAL_IMAGE_URL}
                alt="Security operations professionals in a planning session"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                  Book Demo
                </p>
                <h2
                  id="demo-modal-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-slate-950"
                >
                  Schedule your DutyFlex walkthrough
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                aria-label="Close demo booking modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Share a few details and our team will contact you to confirm a
              suitable slot.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                onClose();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5 text-sm font-medium text-slate-700">
                  <span>Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
                  />
                </label>

                <label className="space-y-1.5 text-sm font-medium text-slate-700">
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5 text-sm font-medium text-slate-700">
                  <span>Phone</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+1 555 012 3456"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
                  />
                </label>

                <label className="space-y-1.5 text-sm font-medium text-slate-700">
                  <span>Company Name</span>
                  <input
                    required
                    type="text"
                    name="company"
                    placeholder="DutyFlex Security"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
                  />
                </label>
              </div>

              <label className="block space-y-1.5 text-sm font-medium text-slate-700">
                <span>Number of Employees</span>
                <select
                  required
                  name="employees"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-teal-300 transition focus:border-teal-500 focus:ring-2"
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="1-25">1 - 25</option>
                  <option value="26-50">26 - 50</option>
                  <option value="51-100">51 - 100</option>
                  <option value="101-250">101 - 250</option>
                  <option value="251+">251+</option>
                </select>
              </label>

              <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
                Book Slot
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
