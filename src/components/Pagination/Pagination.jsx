import { range } from "../../utils";

function Pagination({ total, limit, currentPage, selectPage }) {
	const pagesCount = Math.ceil(total / limit);
	const pages = range(1, pagesCount + 1);
	return (
		<ul className="pagination">
			{pages.map((page) => (
				<li
					data-testid="pagination-item"
					key={page}
					onClick={() => selectPage(page)}
					className={`page-item ${currentPage === page ? "active" : ""}`}
				>
					<span className="page-link">{page}</span>
				</li>
			))}
		</ul>
	);
}

export default Pagination;
