import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();
	if (error.status === 404)
		return (
			<main className='grid min-h-[100vh] place-items-center px-8 '>
				<div className='text-center'>
					<p className='text-9xl font-semibold text-red-500'>{error.status}</p>
					<h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
						{error.statusText}
					</h1>
					<hr className='mt-6' />
					<p className='mt-6 text-lg leading-7 '>
						Sorry, we couldn’t find the page you’re looking for
					</p>
					<span>{error.error.message}</span>
					<div className='mt-10 '>
						<Link to='/' className='btn btn-outline'>
							Go back home
						</Link>
					</div>
				</div>
			</main>
		);

	return (
		<main className='grid min-h-[100vh] place-items-center px-8 '>
			<h4 className='text-center font-bold text-4xl'>there was an error... </h4>
		</main>
	);
};
export default Error;
