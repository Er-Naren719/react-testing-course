import { describe, it, expect } from "vitest";
import { range } from "./utils";

describe("Utils", () => {
	describe("Test range function", () => {
		it("returns correct result from 1-6 range", () => {
			const result = range(1, 6);
			expect(result).toEqual([1, 2, 3, 4, 5]);
		});

		it("returns correct result from 41-46 range", () => {
			const result = range(41, 46);
			expect(result).toEqual([41, 42, 43, 44, 45]);
		});
	});
});
