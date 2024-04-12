import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from '../../form/FormInput';
import FormSelect from '../../form/FormSelect';
import FormRange from '../../form/FormRange';
import FormCheckbox from '../../form/FormCheckbox';

const Filters = () => {
	const { meta } = useLoaderData();
	return (
		<Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
			{/* SEARCH */}
			<FormInput
				type='search'
				name='search'
				label='search product'
				size='input-sm'
			/>

			{/* CATEGORIES */}
			<FormSelect
				name='category'
				label='select category'
				size='select-sm'
				list={meta.categories}
			/>

			{/* COMPANY */}
			<FormSelect
				name='company'
				label='select company'
				size='select-sm'
				list={meta.companies}
			/>
			{/* ORDER */}
			<FormSelect
				name='order'
				label='sort by'
				size='select-sm'
				list={['a-z', 'z-a', 'high', 'low']}
			/>
			{/* PRICE */}
			<FormRange name='price' label='select price' size='range-sm' />

			{/* SHIPPING */}
			<FormCheckbox name='shipping' label='free shipping' size='checkbox-sm' />

			{/* BUTTONS */}

			<button type='submit' className='btn btn-secondary btn-sm uppercase'>
				submit
			</button>
			<button className='btn btn-primary btn-sm uppercase'>
				<Link to='/products'>reset</Link>
			</button>
		</Form>
	);
};
export default Filters;
