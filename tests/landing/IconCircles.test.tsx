import { describe, it, expect, vi, beforeEach, type Mock } from "vitest";
import { render } from "@testing-library/react";
import * as reactResponsive from "react-responsive";
import * as framerMotion from "framer-motion";
import { IconCircles } from "@/components/landing/IconCircles";

// Mock dependencies
vi.mock("react-responsive", () => ({
  useMediaQuery: vi.fn(),
}));

vi.mock("framer-motion", () => ({
  motion: {
    div: vi.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  },
}));

describe("IconCircles", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (reactResponsive.useMediaQuery as Mock).mockReturnValue(false);
  });

  it("renders all orbiting circles", () => {
    const { container } = render(<IconCircles />);

    const orbitingCircles = container.querySelectorAll(
      '[class*="animate-orbit"]',
    );
    expect(orbitingCircles.length).toBeGreaterThan(20);
  });

  it("applies mobile-specific variants when mobile", () => {
    (reactResponsive.useMediaQuery as Mock).mockReturnValue(true);

    render(<IconCircles />);

    expect(framerMotion.motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        variants: {
          hidden: { opacity: 0, scale: 0.75 },
          visible: expect.objectContaining({
            transition: expect.objectContaining({
              duration: 3,
              staggerChildren: 2,
            }),
          }),
        },
      }),
      expect.anything(),
    );
  });

  it("renders all technology icons", () => {
    const { container } = render(<IconCircles />);

    const techIcons = ["SiSonar", "SiGitlab", "SiDocker", "SiKubernetes"];

    techIcons.forEach((icon) => {
      const iconElement = container.querySelector(`[data-testid="${icon}"]`);
      expect(iconElement).toBeTruthy();
    });
  });
});
