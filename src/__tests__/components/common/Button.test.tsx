import Button from "@/components/common/Button";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
  it("Load component", () => {
    render(<Button>Hello world</Button>);
  });
});
