import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock('./envConfig', () => ({
  default: () => ({
    imageURI: "http://mockimage.server",
  }),
}));