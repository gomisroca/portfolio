import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as framerMotion from "framer-motion";
import StackedCards from "@/components/landing/StackedCards";

vi.mock("framer-motion", () => ({
  motion: {
    div: vi.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  },
  useScroll: vi.fn(() => ({ x: 0, y: 0 })),
  useTransform: vi.fn(() => ({ x: 0, y: 0 })),
}));

vi.mock("react-responsive", () => ({
  useMediaQuery: vi.fn((query: string) => () => query === "(max-width: 540px)"),
}));

describe("StackedCards", () => {
  it("renders project cards correctly", () => {
    render(<StackedCards />);

    const ouraImg = screen.getByRole("img", { name: "Oura" });
    expect(ouraImg).toHaveAttribute("src", "/portfolio/cards/oura.png");

    const dungeoneerImg = screen.getByRole("img", { name: "Dungeoneer" });
    expect(dungeoneerImg).toHaveAttribute(
      "src",
      "/portfolio/cards/dungeoneer.png",
    );

    const echoesImg = screen.getByRole("img", { name: "Echoes" });
    expect(echoesImg).toHaveAttribute("src", "/portfolio/cards/echoes.png");

    const esiaImg = screen.getByRole("img", { name: "Esia" });
    expect(esiaImg).toHaveAttribute("src", "/portfolio/cards/esia.png");

    expect(framerMotion.motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        initial: expect.objectContaining({
          rotateZ: 0,
        }),
        animate: expect.objectContaining({
          rotateZ: expect.any(Number),
          x: 0,
          y: 0,
          opacity: 1,
          zIndex: 0,
        }),
      }),
      {},
    );
  });
});
