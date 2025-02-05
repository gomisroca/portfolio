import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LanguageLink from "@/components/ui/footer/LanguageLink";

vi.mock("@/i18n/utils", () => ({
  useTranslatedPath: vi.fn(
    () => (path: string, lang: string) => `/${lang}${path}`,
  ),
}));

describe("Language Link", () => {
  const props = {
    lang: "en" as "en" | "de" | "es" | "cat",
    href: "/about",
    label: "About",
    className: "custom-class",
  };

  it("renders correctly with given props", () => {
    render(<LanguageLink {...props} />);

    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/en/about");
  });

  it("applies the correct styles", () => {
    render(<LanguageLink {...props} />);
    const div = screen.getByText("About");

    expect(div).toHaveClass(
      "w-fit rounded-md px-1 text-sm font-semibold text-zinc-500 hover:text-primary-500",
    );
    expect(div).toHaveClass("custom-class"); // Checks if extra classes are applied
  });

  it("navigates to the correct link when clicked", async () => {
    render(<LanguageLink {...props} />);
    const link = screen.getByRole("link", { name: /about/i });

    expect(link).toHaveAttribute("href", "/en/about");

    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    act(() => {
      fireEvent.click(link);
    });
    expect(openSpy).not.toHaveBeenCalled();

    openSpy.mockRestore();
  });
});
