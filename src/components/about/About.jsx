import Store from '../../assets/store.png';

const About = () => {
	return (
		<div className='mt-20 sm:mt-48 mb-4'>
			<div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
				<h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
					We love
				</h1>
				<div className='stats bg-accent shadow-lg shadow-slate-500'>
					<div className='stat'>
						<div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
							daisy
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-between lg:flex-row mt-10 items-center w-full'>
				<img src={Store} alt='Store' className='h-80 object-cover' />
				<div className='px-4 '>
					<p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
						odit, officiis eos mollitia alias, doloremque, aspernatur ratione
						asperiores voluptas labore minus dolores reprehenderit corporis
						quos.
					</p>
					<p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
						odit, officiis eos mollitia alias, doloremque, aspernatur ratione
						asperiores voluptas labore minus dolores reprehenderit corporis
						quos.
					</p>
					<p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
						odit, officiis eos mollitia alias, doloremque, aspernatur ratione
						asperiores voluptas labore minus dolores reprehenderit corporis
						quos.
					</p>
				</div>
			</div>
		</div>
	);
};
export default About;
