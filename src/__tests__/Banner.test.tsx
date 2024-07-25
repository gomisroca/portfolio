import Banner from "@/components/banner";
import '@testing-library/jest-dom'
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

describe('Banner',() => {
    afterEach(cleanup);

    it('should render component', () => {
        render(<Banner />);
    });

    it('should render my name', () => {
        render(<Banner />);
        const name = screen.getByText('Adrià Gomis');
        expect(name).toBeInTheDocument();
    });

    it('should render the avatar placeholder', () => {
        render(<Banner />);
        const avatar_ph = screen.getByText('AG');
        expect(avatar_ph).toBeInTheDocument();
    });
});
