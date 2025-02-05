import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Dock from "@/components/ui/nav/Dock";

const mockStart = vi.fn();
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  LayoutGroup: ({ children }: any) => <>{children}</>,
  useAnimation: () => ({ start: mockStart }),
}));

// Mock Lucide icons
vi.mock("lucide-react", () => ({
  Home: () => <div data-testid="home-icon">Home Icon</div>,
  Info: () => <div data-testid="info-icon">Info Icon</div>,
  Mail: () => <div data-testid="mail-icon">Mail Icon</div>,
}));

// Mock translations
vi.mock("@/i18n/utils", () => ({
  useTranslations: () => (key: string) => {
    const translations = {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.contact": "Contact",
    };
    return translations[key as keyof typeof translations] || key;
  },
  useTranslatedPath: (lang: string) => (path: string) => `/${lang}${path}`,
}));

describe("Dock", () => {
  const defaultProps = {
    lang: "en" as const,
  };

  it("renders all dock items with correct icons and labels", () => {
    render(<Dock {...defaultProps} />);

    // Check icons are rendered
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();
    expect(screen.getByTestId("info-icon")).toBeInTheDocument();
    expect(screen.getByTestId("mail-icon")).toBeInTheDocument();

    // Check labels are rendered (they're hidden by default)
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("generates correct translated paths for each item", () => {
    render(<Dock {...defaultProps} />);

    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/en/");
    expect(links[1]).toHaveAttribute("href", "/en/about");
    expect(links[2]).toHaveAttribute("href", "/en/contact");
  });

  it("shows labels when dock is hovered", () => {
    render(<Dock {...defaultProps} />);

    const dockContainer = screen.getByRole("link", { name: /home/i })
      .parentElement?.parentElement;
    expect(dockContainer).toBeInTheDocument();

    // Hover over dock
    if (dockContainer) {
      act(() => fireEvent.mouseEnter(dockContainer));

      // Check that labels are visible
      const labels = screen.getAllByText(/(Home|About|Contact)/);
      labels.forEach((label) => {
        expect(label).toBeVisible();
      });

      // Mouse leave should hide labels
      fireEvent.mouseLeave(dockContainer);
    }
  });

  it("applies correct styles for important items", () => {
    render(<Dock {...defaultProps} />);

    // Contact is marked as important
    const contactItem = screen.getByRole("link", { name: /contact/i });
    const contactContainer = contactItem.querySelector(
      '[class*="text-accent-500"]',
    );
    expect(contactContainer).toBeInTheDocument();
  });

  it("renders with different languages", () => {
    const { rerender } = render(<Dock lang="es" />);

    // Test Spanish paths
    let links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/es/");

    // Test German paths
    rerender(<Dock lang="de" />);
    links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/de/");
  });
});

describe("DockItem", () => {
  it("handles hover interaction", () => {
    render(<Dock lang="en" />);

    const homeLink = screen.getByRole("link", { name: /home/i });

    act(() => fireEvent.mouseEnter(homeLink));
    expect(mockStart).toHaveBeenCalledWith(
      expect.objectContaining({
        scale: 1.5,
      }),
    );

    act(() => fireEvent.mouseLeave(homeLink));
    expect(mockStart).toHaveBeenCalledWith(
      expect.objectContaining({
        scale: 1,
      }),
    );
  });

  it("handles tap/touch interactions", () => {
    render(<Dock lang="en" />);

    const homeLink = screen.getByRole("link", { name: /home/i });

    // Test tap effects
    fireEvent.mouseDown(homeLink);
    expect(mockStart).toHaveBeenCalledWith(
      expect.objectContaining({
        scale: 1.75,
      }),
    );

    mockStart.mockClear();

    fireEvent.touchStart(homeLink);
    expect(mockStart).toHaveBeenCalledWith(
      expect.objectContaining({
        scale: 1.75,
      }),
    );
  });

  it("has correct accessibility attributes", () => {
    render(<Dock lang="en" />);

    // Check that screen reader text is present
    expect(screen.getByText("Home")).toHaveClass("sr-only");
    expect(screen.getByText("About")).toHaveClass("sr-only");
    expect(screen.getByText("Contact")).toHaveClass("sr-only");
  });
});
