import "@testing-library/jest-dom";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { QueryCache } from "@tanstack/react-query";
import "./storageMock";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const queryCache = new QueryCache();
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);
// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
  queryCache.clear();
});
