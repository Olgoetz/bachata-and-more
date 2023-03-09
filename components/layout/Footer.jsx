import { useEffect, useState } from 'react';
import { BiCopyright } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link';
import DownloadConceptButton from '../ui/DownloadConceptButton';
const Footer = () => {
	const [currentDate, setCurrentDate] = useState();

	useEffect(() => {
		let today = new Date();
		let year = today.getFullYear();
		setCurrentDate(year);
	}, []);

	return (
		<div className='w-full bg-black px-5 pt-5 pb-5'>
			<div className='max-w-[1024px] mx-auto'>
				<div className='grid md:grid-cols-2 md:gap-x-3'>
					<div className='flex flex-col justify-center'>
						<h1 className='text-3xl font-bold text-orange-400'>
							Bachata&More.
						</h1>
						<ul className='flex flex-col gap-1 mt-2 text-white text-[12px]'>
							{/* <li className='flex items-center'>
								<HiOutlineMail size={20} className='mr-1' />
								<a href='mailto:michi@bachata-and-more.de'>
									Persönlich: michi@bachata-and-more.de
								</a>
							</li>
							<li className='flex items-center'>
								<HiOutlineMail size={20} className='mr-1' />
								<a href='mailto:oli@bachata-and-more.de'>
									Persönlich: oli@bachata-and-more.de
								</a>
							</li>
							<li className='flex items-center'>
								<HiOutlineMail size={20} className='mr-1' />
								<a href='mailto:booking@bachata-and-more.de'>
									Buchung: booking@bachata-and-more.de
								</a>
							</li> */}
							<li className='flex items-center'>
								<HiOutlineMail size={25} className='mr-1' />
								<a href='mailto:info@bachata-and-more.de'>
									info@bachata-and-more.de
								</a>
							</li>
							<li className='flex items-center'>
								<AiOutlineInstagram size={25} className='mr-1' />
								<a
									href='https://www.instagram.com/michaela_suessbauer/'
									rel='noreferrer'
									target='_blank'
								>
									Michi
								</a>
							</li>
							<li className='flex items-center'>
								<AiOutlineInstagram size={25} className='mr-1' />
								<a
									href='https://www.instagram.com/oli_goetz/'
									rel='noreferrer'
									target='_blank'
								>
									Oli
								</a>
							</li>
						</ul>
					</div>
					<div className='flex flex-col my-4 w-full mx-auto justify-center'>
						<DownloadConceptButton />
					</div>
				</div>
{/* 
				<div className='flex flex-col text-sm text-white pt-5'>
					<div className='flex justify-center pb-3'>
				

						<Link href='/impressum'>Impressum</Link>
						<span className='mx-2'>|</span>
						<Link href='/dataprivacy'>Datenschutz</Link>
					</div>
					<div className='flex justify-center'>
						<BiCopyright size={20} className='mr-1' />
						<p>2022 - {currentDate} Michaela Süßbauer & Oliver Götz</p>
					</div>
				</div> */}

			</div>
		</div>
	);
};

export default Footer;
