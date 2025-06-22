import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

describe("Panigation component testing", () => {
	it("renders correct pagination", () => {
		render(
			<Pagination
				total={100}
				limit={10}
				currentPage={1}
				selectPage={() => {}}
			/>
		);
		const pageContainers = screen.getAllByTestId("pagination-item");
		expect(pageContainers).toHaveLength(10);
		expect(pageContainers[0]).toHaveTextContent("1");
	});

	it("should emit click handler correctly", async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();
		render(
			<Pagination
				total={100}
				limit={10}
				currentPage={1}
				selectPage={handleClick}
			/>
		);
		const pageContainers = screen.getAllByTestId("pagination-item");
		await user.click(pageContainers[2]);
		expect(handleClick).toHaveBeenCalledOnce();
		expect(handleClick).toHaveBeenCalledWith(3);
	});
});
