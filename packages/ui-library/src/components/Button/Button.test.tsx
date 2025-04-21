import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click Me</Button>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass(
      "ui-button-base",
      "ui-button-primary",
      "ui-button-medium"
    );
  });

  it("applies variant and size classes", () => {
    render(
      <Button variant="outline" size="large">
        Custom
      </Button>
    );
    const btn = screen.getByRole("button", { name: /custom/i });
    expect(btn).toHaveClass("ui-button-outline", "ui-button-large");
  });

  it("handles click events", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled class and attribute", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button", { name: /disabled/i });
    expect(btn).toBeDisabled();
    expect(btn).toHaveClass("ui-button-disabled");
  });

  it("accepts custom className", () => {
    render(<Button className="custom-class">Test</Button>);
    const btn = screen.getByRole("button", { name: /test/i });
    expect(btn).toHaveClass("custom-class");
  });
});
