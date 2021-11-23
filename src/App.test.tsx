import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

global.fetch = jest.fn(() => Promise.resolve({
	json: () => Promise.resolve({
		jwiId_url: "http://test.jwt", value: "token_id"
	})
}));

describe("App", () => {
	it("It fetch the jwt token on mount", );
});
