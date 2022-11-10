import { useEffect, useState } from 'react';
import { BiCopyright } from 'react-icons/bi';
import DownloadConceptButton from './DownloadConceptButton';
const Footer = () => {
	const [currentDate, setCurrentDate] = useState();

	useEffect(() => {
		let today = new Date();
		let year = today.getFullYear();
		setCurrentDate(year);
	}, []);

	return (
		<div className='w-full bg-black px-5 py-5'>
			<div className='max-w-[1024px] mx-auto grid md:grid-cols-2 md:gap-x-3'>
				<div className='flex flex-col'>
					<h1 className='text-3xl font-bold text-orange-400'>Bachata&More.</h1>
					<div className='pl-4 text-white'>
						<p className='py-2'>Impressum</p>
						<p>Disclaimer</p>
					</div>
				</div>
				<div className='flex flex-col my-5 w-full mx-auto justify-center'>
					<DownloadConceptButton />
				</div>
			</div>
			<div className='flex justify-center text-sm text-white'>
				<BiCopyright size={20} className='mr-1' />
				<p>2022 - {currentDate} Michaela Süßbauer & Oliver Götz</p>
			</div>
		</div>
	);
};

export default Footer;
