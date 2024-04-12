import { useState } from 'react';
import { formatPrice } from '../../utils';

const FormRange = ({ label, name, size }) => {
	const step = 1000;
	const maxPrice = 100000;
	const [selectedPrice, setSelectedPrice] = useState(maxPrice);
	return (
		<div className='form-control'>
			<label htmlFor={name} className='label '>
				<span className='label-text-alt capitalize'>{label}</span>
				<span className='text-xs tracking-widest'>
					{formatPrice(selectedPrice)}
				</span>
			</label>
			<input
				type='range'
				name={name}
				min={0}
				max={maxPrice}
				value={selectedPrice}
				onChange={(e) => setSelectedPrice(e.target.value)}
				step={step}
				className={`range range-secondary cursor-pointer ${size}`}
			/>
		</div>
	);
};
export default FormRange;
