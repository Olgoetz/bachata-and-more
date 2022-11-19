import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/router';
//import { Link } from 'react-scroll';
import Link from 'next/link';
const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBgColor, setNavBgColor] = useState('bg-white');

	const router = useRouter();
	useEffect(() => {
		useEffect.asPath == '/impressum'
			? setNavBgColor('bg-black')
			: setNavBgColor('bg-white');
	}, [router]);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div
			//style={{ 'background-color': `${navBgColor}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100] bg-white ease-in-out duration-300 px-2'
					: 'fixed w-full px-2 h-20 z-[100] bg-black md:text-white'
			}
			//className='absolute w-full h-20 shadow-xl z-[100] bg-white ease-in-out duration-300 px-5'
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<h1 className='block text-3xl font-bold text-orange-400'>
					Bachata&More.
				</h1>
				<div>
					<ul className='uppercase hidden md:flex'>
						<li className='ml-10 text-sm hover:border-b'>
							<Link href='/'>Home</Link>
						</li>

						<li className='ml-10 text-sm hover:border-b'>
							<Link href='/#bachata'>Bachata</Link>
						</li>
						<li className='ml-10 text-sm  hover:border-b'>
							<Link href='/#more'>More</Link>
						</li>
						<li className='ml-10 text-sm  hover:border-b'>
							<Link href='/#contact'>Kontakt</Link>
						</li>
						<li className='ml-10 text-sm  hover:border-b whitespace-nowrap'>
							<Link href='/#aboutus'>Über uns</Link>
						</li>
					</ul>

					{/* Hamburger */}
					<div onClick={handleNav} className=' text-orange-400 md:hidden'>
						<AiOutlineMenu size={25} />
					</div>

					{/* Mobile Menu */}
					{/* Overlay */}
					<div
						className={
							nav
								? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
								: ''
						}
					>
						{/* Side Drawer Menu */}
						<div
							className={
								nav
									? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
									: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
							}
						>
							<div>
								<div className='flex w-full justify-between align-center'>
									<h1 className='block text-xl font-bold text-orange-400'>
										Bachata&More.
									</h1>
									<div
										onClick={handleNav}
										className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
									>
										<AiOutlineClose size={10} />
									</div>
								</div>
								<div className='py-4 flex flex-col'>
									<ul className='uppercase'>
										<Link href='/'>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
											>
												Home
											</li>
										</Link>

										<Link href='/#bachata'>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
											>
												Bachata
											</li>
										</Link>
										<Link href='/#more'>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
											>
												More
											</li>
										</Link>
										<Link href='/#contact'>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
											>
												Kontakt
											</li>
										</Link>
										<Link href='/#aboutus'>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm whitespace-nowrap border-b'
											>
												Über uns
											</li>
										</Link>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
