import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as framerMotion from "framer-motion";
import FadeInText from "@/components/landing/FadeInText";

vi.mock("framer-motion", () => ({
  motion: {
    div: vi.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  },
}));

describe("FadeInText", () => {
  it("renders children correctly", () => {
    render(
      <FadeInText>
        <span>Hello World</span>
      </FadeInText>,
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <FadeInText className="custom-class">
        <span>Hello World</span>
      </FadeInText>,
    );

    const motionDiv = screen.getByText("Hello World").closest("div");
    expect(motionDiv).toHaveClass("custom-class");
  });

  it("uses default speed when not provided", () => {
    render(
      <FadeInText>
        <span>Hello World</span>
      </FadeInText>,
    );

    expect(framerMotion.motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        variants: expect.objectContaining({
          visible: expect.objectContaining({
            transition: expect.objectContaining({
              duration: 0.5,
            }),
          }),
        }),
      }),
      {},
    );
  });

  it("uses provided speed", () => {
    render(
      <FadeInText speed={1.5}>
        <span>Hello World</span>
      </FadeInText>,
    );

    expect(framerMotion.motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        variants: expect.objectContaining({
          visible: expect.objectContaining({
            transition: expect.objectContaining({
              duration: 1.5,
            }),
          }),
        }),
      }),
      {},
    );
  });

  it("applies initial state correctly", () => {
    render(
      <FadeInText>
        <span>Hello World</span>
      </FadeInText>,
    );

    expect(framerMotion.motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: expect.objectContaining({
            opacity: 1,
            y: 0,
          }),
        },
      }),
      {},
    );
  });

  it("applies transition when in view", async () => {
    render(
      <FadeInText>
        <span>Hello World</span>
      </FadeInText>,
    );

    expect(framerMotion.motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              staggerChildren: 0.5,
            },
          },
        },
      }),
      expect.anything(),
    );
  });
});
