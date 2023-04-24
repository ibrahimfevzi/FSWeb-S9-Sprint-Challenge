import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AppFunctional from "./AppFunctional";

test("hata olmadan render ediliyor", () => {
  render(<AppFunctional />);
});

// Write your tests here
test("sanity", () => {
  expect(true).toBe(false);
});
