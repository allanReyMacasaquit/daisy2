import { Link } from 'react-router-dom';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';

const footerLink = [
	{ name: 'twitter', url: 'https://twitter.com/i/flow/login', image: Twitter },
	{ name: 'facebook', url: 'https://www.facebook.com/login/', image: Facebook },
	{
		name: 'instagram',
		url: 'https://www.instagram.com/accounts/login/?hl=en',
		image: Instagram,
	},
];

const Footer = () => {
	const currentDate = new Date().getFullYear();

	return (
		<footer className='footer footer-center py-8 mt-6 '>
			<div className='border-y p-3 w-full bg-base-300 rounded-xl'>
				<p>Thank you for visiting Daisy.</p>
				<p>Stay connected</p>
				<div className='flex space-x-2'>
					{footerLink.map(({ name, url, image }) => (
						<Link key={name} to={url} className='flex items-center'>
							<img src={image} alt='Twitter' className='h-7 px-2' />
							{name}
						</Link>
					))}
				</div>
				<p>© {currentDate} Daisy. All rights reserved.</p>
			</div>
		</footer>
	);
};
export default Footer;
