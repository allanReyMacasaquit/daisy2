const FormCheckbox = ({ label, name, defaultValue, size }) => {
	return (
		<div className='form-control items-center'>
			<div className='flex gap-x-4 items-center'>
				<label htmlFor={name} className='label '>
					<span className='label-text capitalize'>{label}</span>
				</label>
				<input
					type='checkbox'
					name={name}
					defaultChecked={defaultValue}
					className={`checkbox checkbox-secondary cursor-pointer ${size}`}
				/>
			</div>
		</div>
	);
};
export default FormCheckbox;
