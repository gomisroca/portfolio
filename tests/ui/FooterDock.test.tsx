import FooterDock from "@/components/ui/footer/FooterDock";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

// Mock the framer-motion to avoid animation-related issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    ul: ({ children, ...props }: any) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
  },
}));

// Mock ThemeToggle component
vi.mock("@/components/ui/footer/ThemeToggle", () => ({
  default: () => <button data-testid="theme-toggle">Theme Toggle</button>,
}));

// Mock LanguageLink component
vi.mock("@/components/ui/footer/LanguageLink", () => ({
  default: ({ lang, label, className }: any) => (
    <a data-testid={`language-link-${lang}`} className={className}>
      {label}
    </a>
  ),
}));

describe("FooterDock", () => {
  const defaultProps = {
    activeLang: "en" as const,
    path: "/home",
  };

  it("renders correctly with default props", () => {
    render(<FooterDock {...defaultProps} />);

    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
  });

  it("renders with different active language", () => {
    render(<FooterDock {...defaultProps} activeLang="es" />);

    expect(screen.getByText("ES")).toBeInTheDocument();
  });
});

describe("LanguageDropdown", () => {
  const defaultProps = {
    activeLang: "en" as const,
    path: "/home",
  };

  it("opens dropdown when clicking language button", async () => {
    render(<FooterDock {...defaultProps} />);

    const languageButton = screen.getByText("EN");
    act(() => {
      fireEvent.click(languageButton);
    });

    // Check if all language options are visible
    expect(screen.getByTestId("language-link-en")).toBeInTheDocument();
    expect(screen.getByTestId("language-link-es")).toBeInTheDocument();
    expect(screen.getByTestId("language-link-cat")).toBeInTheDocument();
    expect(screen.getByTestId("language-link-de")).toBeInTheDocument();
  });

  it("closes dropdown when clicking outside", async () => {
    render(<FooterDock {...defaultProps} />);

    const languageButton = screen.getByText("EN");
    act(() => {
      fireEvent.click(languageButton);
    });

    expect(screen.getByTestId("language-link-es")).toBeInTheDocument();

    act(() => {
      fireEvent.click(languageButton);
    });

    expect(screen.queryByTestId("language-link-es")).not.toBeInTheDocument();
  });

  it("applies correct styling to active language", async () => {
    render(<FooterDock {...defaultProps} />);

    const languageButton = screen.getByText("EN");
    act(() => {
      fireEvent.click(languageButton);
    });

    const activeLink = screen.getByTestId("language-link-en");
    expect(activeLink.className).toContain("underline");
    expect(activeLink.className).toContain("decoration-accent-500/70");
  });

  it("handles cleanup of event listeners", () => {
    const { unmount } = render(<FooterDock {...defaultProps} />);

    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function),
    );
  });
});
