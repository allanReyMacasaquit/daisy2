const SectionTitle = ({ text }) => {
	return (
		<>
			<section>
				<div className='text-center border rounded-xl shadow  shadow-slate-500 p-2'>
					<h2 className='text-3xl font-medium tracking-wider capitalize'>
						{text}
					</h2>
				</div>
			</section>
		</>
	);
};
export default SectionTitle;
