const SectionTitle = ({ text }) => {
	return (
		<>
			<section>
				<div className='border-y p-3 w-full bg-base-300 rounded-xl text-center'>
					<h2 className='text-3xl text-secondary font-medium tracking-wider capitalize'>
						{text}
					</h2>
				</div>
			</section>
		</>
	);
};
export default SectionTitle;
