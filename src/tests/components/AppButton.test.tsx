import { it, describe, expect, afterEach, vi } from "viTest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AppButton from "../../components/appButton";

describe("AppButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders a button with the provided title", () => {
    render(<AppButton title="Click Me" />);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders a button with an icon if provided", () => {
    const IconMock = () => <span>Icon</span>;
    render(<AppButton icon={<IconMock />} />);
    const iconElement = screen.getByText("Icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("applies custom classes to the button if provided", () => {
    render(
      <AppButton
        classes={{ root: "bg-red-700", text: "bg-blue-700" }}
        title="Styled Button"
      />
    );
    const buttonElement = screen.getByTestId("app-button");
    expect(buttonElement).toBeInTheDocument();
    screen.debug();
    expect(buttonElement).toHaveClass("bg-red-700");
    expect(buttonElement.firstChild).toHaveClass("bg-blue-700");
  });

  it("handles onClick event", () => {
    const handleClick = vi.fn();
    render(<AppButton title="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText("Click Me");

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
