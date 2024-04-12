import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
	const { meta } = useLoaderData();
	const { pageCount, page } = meta.pagination;

	const pages = Array.from({ length: pageCount }, (_, index) => {
		return index + 1;
	});
	const { search, pathname } = useLocation();
	const navigate = useNavigate();

	const handlePageChange = (pageNumber) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set('page', pageNumber);
		navigate(`${pathname}?${searchParams.toString()}`);
	};

	if (pageCount < 2) return null;

	const disablePrev = page <= 1;
	const disableNext = page >= pageCount;

	return (
		<div className='mt-10 sm:mt-16 flex justify-end'>
			<div className='join'>
				<button
					className={`btn btn-xs join-item sm:btn-md ${
						disablePrev ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					onClick={() => {
						if (!disablePrev) {
							let prevPage = page - 1;
							if (prevPage < 1) prevPage = 1;
							handlePageChange(prevPage);
						}
					}}
					disabled={disablePrev}
				>
					<i className='fa-solid fa-chevron-left'></i>
				</button>
				{pages.map((pageNumber) => {
					return (
						<button
							key={pageNumber}
							onClick={() => {
								handlePageChange(pageNumber);
							}}
							className={`btn btn-xs sm:btn-md border-none join-item ${
								pageNumber === page ? 'bg-base-300 border-base-300' : ''
							}`}
						>
							{pageNumber}
						</button>
					);
				})}
				<button
					className={`btn btn-xs join-item sm:btn-md ${
						disableNext ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					onClick={() => {
						if (!disableNext) {
							let nextPage = page + 1;
							if (nextPage > pageCount) nextPage = pageCount;
							handlePageChange(nextPage);
						}
					}}
					disabled={disableNext}
				>
					<i className='fa-solid fa-chevron-right'></i>
				</button>
			</div>
		</div>
	);
};
export default PaginationContainer;
