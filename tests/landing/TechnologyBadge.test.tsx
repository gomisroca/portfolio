import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TechnologyBadge from "@/components/landing/TechnologyBadge";

// Mock the UI components
vi.mock("@/components/ui/popover", () => ({
  Popover: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  PopoverTrigger: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => (
    <button className={className} data-testid="popover-trigger">
      {children}
    </button>
  ),
  PopoverContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="popover-content">{children}</div>
  ),
}));

// Mock react-icons
vi.mock("react-icons/si", () => ({
  SiNextdotjs: () => <div data-testid="icon-nextjs">Next.js Icon</div>,
  SiReact: () => (
    <div
      data-testid="icon-react"
      color="#61DAFB"
      className="h-5 w-5 brightness-50 transition duration-200 active:duration-100 group-hover:brightness-100 group-active:brightness-110"
    >
      React Icon
    </div>
  ),
  SiAstro: () => <div data-testid="icon-astro">Astro Icon</div>,
  SiSanity: () => <div data-testid="icon-sanity">Sanity Icon</div>,
  SiVercel: () => <div data-testid="icon-vercel">Vercel Icon</div>,
  SiDocker: () => <div data-testid="icon-docker">Docker Icon</div>,
  SiTrpc: () => <div data-testid="icon-trpc">tRPC Icon</div>,
  SiPostgresql: () => <div data-testid="icon-postgresql">PostgreSQL Icon</div>,
  SiStripe: () => <div data-testid="icon-stripe">Stripe Icon</div>,
  SiSupabase: () => <div data-testid="icon-supabase">Supabase Icon</div>,
  SiVuedotjs: () => <div data-testid="icon-vue">Vue Icon</div>,
  SiExpress: () => <div data-testid="icon-express">Express Icon</div>,
  SiMongodb: () => <div data-testid="icon-mongodb">MongoDB Icon</div>,
}));

describe("TechnologyBadge", () => {
  it("renders correctly with React technology", () => {
    render(<TechnologyBadge technology="React" />);

    // Check if trigger button exists
    expect(screen.getByTestId("popover-trigger")).toBeInTheDocument();

    // Check if icon is rendered
    expect(screen.getByTestId("icon-react")).toBeInTheDocument();

    // Check if screen reader text is present
    expect(screen.getByText("React", { selector: "span" })).toBeInTheDocument();

    // Check if popover content exists
    expect(screen.getByTestId("popover-content")).toHaveTextContent("React");
  });

  it("renders correctly with Next.js technology", () => {
    render(<TechnologyBadge technology="Next.js" />);
    expect(screen.getByTestId("icon-nextjs")).toBeInTheDocument();
    expect(
      screen.getByText("Next.js", { selector: "span" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("popover-content")).toHaveTextContent("Next.js");
  });

  it("has correct styling classes on trigger", () => {
    render(<TechnologyBadge technology="React" />);
    const trigger = screen.getByTestId("popover-trigger");

    expect(trigger).toHaveClass(
      "group",
      "rounded-full",
      "border",
      "border-zinc-950/20",
      "bg-zinc-50",
      "p-1",
      "transition",
      "duration-200",
      "hover:scale-110",
      "hover:border-zinc-950/30",
      "active:scale-125",
      "active:duration-100",
    );
  });

  it("has correct styling classes on icon", () => {
    render(<TechnologyBadge technology="React" />);
    const icon = screen.getByTestId("icon-react");

    expect(icon).toHaveClass(
      "h-5",
      "w-5",
      "brightness-50",
      "transition",
      "duration-200",
      "active:duration-100",
      "group-hover:brightness-100",
      "group-active:brightness-110",
    );
  });

  it("applies correct color to icon", () => {
    render(<TechnologyBadge technology="React" />);
    const icon = screen.getByTestId("icon-react");
    expect(icon).toHaveAttribute("color", "#61DAFB");
  });

  it("returns null for invalid technology", () => {
    // @ts-expect-error - Testing invalid technology
    const { container } = render(<TechnologyBadge technology="InvalidTech" />);
    expect(container.firstChild).toBeNull();
  });

  it("renders all supported technologies", () => {
    const technologies: Technology[] = [
      "Astro",
      "Next.js",
      "React",
      "Vue",
      "Sanity",
      "Stripe",
      "tRPC",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Vercel",
      "Supabase",
      "Docker",
    ];

    technologies.forEach((tech) => {
      const { unmount } = render(<TechnologyBadge technology={tech} />);
      expect(screen.getByText(tech, { selector: "span" })).toBeInTheDocument();
      unmount();
    });
  });

  it("has accessible name", () => {
    render(<TechnologyBadge technology="React" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("React", { selector: "span" })).toHaveClass(
      "sr-only",
    );
  });
});
