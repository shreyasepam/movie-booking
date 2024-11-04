import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import AppContainer from "../../components/appContainer";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("../../envConfig", () => ({
  default: vi.fn(),
  getConfig: vi.fn(),
}));

import getConfig, { Config } from "../../envConfig";

const config: Config = {
  baseURL: "",
  imageURI: "",
  token: "",
};

describe("AppContainer", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders children when token is provided", () => {
    (getConfig as any).mockReturnValue({
      ...config,
      token: "valid-token",
    });

    render(
      <AppContainer>
        <div>Test Child</div>
      </AppContainer>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("redirects to /api-key when token is empty string", () => {
    (getConfig as any).mockReturnValue({ ...config });

    render(
      <AppContainer>
        <div>Test Child</div>
      </AppContainer>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/api-key");
  });
});