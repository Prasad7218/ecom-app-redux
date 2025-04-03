import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./components/button/Button";

describe("Button Component", () => {
    test("renders the button with the correct label", () => {
        render(<Button label="Click Me" />);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    test("applies the correct variant class", () => {
        render(<Button label="Click Me" variant="secondary" />);
        expect(screen.getByText("Click Me")).toHaveClass("secondary");
    });

    test("applies the correct size class", () => {
        render(<Button label="Click Me" size="large" />);
        expect(screen.getByText("Click Me")).toHaveClass("large");
    });

    test("applies full-width class when fullWidth is true", () => {
        render(<Button label="Click Me" fullWidth={true} />);
        expect(screen.getByText("Click Me")).toHaveClass("full-width");
    });

    test("calls onClick handler when clicked", () => {
        const handleClick = jest.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        fireEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("disables the button when disabled is true", () => {
        render(<Button label="Click Me" disabled={true} />);
        expect(screen.getByText("Click Me")).toBeDisabled();
    });
});
