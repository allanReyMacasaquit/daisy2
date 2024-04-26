import { Form } from 'react-router-dom';
import FormInput from '../form/FormInput';
import SubmitBtn from '../form/SubmitBtn';
import CartTotals from '../cart/CartTotals';

const CheckoutForm = () => {
	return (
		<Form
			method='POST'
			className='flex flex-col gap-y-4 lg:grid lg:grid-cols-6 lg:gap-4'
		>
			<div className='col-span-4'>
				<h4 className='font-medium text-xl'>Shipping Information</h4>
				<FormInput label='first name' name='name' type='text' />
				<FormInput label='address' name='address' type='text' />
			</div>
			<div className='col-span-8 mt-4 lg:mt-0'>
				<h2 className=' font-medium text-xl'>Payment Information</h2>
				<div className='mt-4'>
					<CartTotals />
				</div>
			</div>
			<div className='mt-4 lg:mt-8 col-span-12'>
				<SubmitBtn
					text={
						<h2 className='text-xl text-secondary-content hover:underline underline-offset-4'>
							Place Your Order
						</h2>
					}
				/>
			</div>
		</Form>
	);
};
export default CheckoutForm;
