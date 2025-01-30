import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, beforeAll } from "vitest";
import ThemeToggle from "@/components/ui/footer/ThemeToggle";

describe("Theme Toggle", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });
  });

  beforeEach(() => {
    localStorage.clear(); // Clear stored theme
    localStorage.setItem("theme", "light"); // Ensure default is light mode
    document.documentElement.classList.remove("dark"); // Reset document class
  });

  it("renders the light mode icon by default", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toContainElement(
      screen.getByTestId("sun-icon"),
    );
  });

  it("initializes theme from localStorage", () => {
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });

  it("toggles theme to dark mode when clicked", async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toContainElement(screen.getByTestId("sun-icon"));

    act(() => {
      fireEvent.click(button);
    });

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(button).toContainElement(screen.getByTestId("moon-icon"));
  });

  it("toggles back to light mode when clicked again", async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    act(() => {
      fireEvent.click(button);
    });

    expect(document.documentElement.classList.contains("dark")).toBe(true);

    act(() => {
      fireEvent.click(button);
    });

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
  });
});
