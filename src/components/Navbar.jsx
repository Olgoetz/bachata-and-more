import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { Link } from 'react-scroll';
const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [logo, setLogo] = useState(false);
	const handleNav = () => {
		setNav(!nav);
		setLogo(!logo);
	};
	return (
		<div className='flex w-full justify-between max-w-[1240px] mx-auto items-center h-20 px-4 absolute z-10 text-white'>
			<h1 className='block text-3xl font-bold text-orange-400'>
				Bachata&More.
			</h1>

			<ul className='uppercase hidden md:flex cursor-pointer'>
				<Link to='home' smooth={true} duration={500}>
					<li className='p-4'>Home</li>
				</Link>

				<Link to='bachata' smooth={true} duration={500}>
					<li className='p-4'>Bachata</li>
				</Link>
				<Link to='more' smooth={true} duration={500}>
					<li className='p-4'>More</li>
				</Link>
				<Link to='aboutus' smooth={true} duration={500}>
					<li className='p-4 whitespace-nowrap'>Über uns</li>
				</Link>
				<Link to='contact' smooth={true} duration={500}>
					<li className='p-4'>Kontakt</li>
				</Link>
			</ul>

			{/* Hamburger */}
			<div onClick={handleNav} className='md:hidden z-10'>
				{nav ? (
					<AiOutlineClose className='text-black' size={20} />
				) : (
					<AiOutlineMenu size={20} />
				)}
			</div>

			{/* Mobile menu dropdown */}

			<ul
				className={
					nav
						? 'absolute h-screen text-black ease-in-out duration-500 left-0 top-0 w-full bg-white'
						: 'ease-in-out duration-500 fixed left-[-100%]'
				}
			>
				<h1 className='text-3xl text-left w-full font-bold text-orange-400 m-4'>
					Bachata&More.
				</h1>
				<Link to='home' smooth={true} duration={500}>
					<li className='p-4 border-b bg-white uppercase border-gray-600'>
						Home
					</li>
				</Link>

				<Link to='bachata' smooth={true} duration={500}>
					<li className='p-4 border-b bg-white uppercase border-gray-600'>
						Bachata
					</li>
				</Link>
				<Link to='more' smooth={true} duration={500}>
					<li className='p-4 border-b bg-white uppercase border-gray-600'>
						More
					</li>
				</Link>
				<Link to='aboutus' smooth={true} duration={500}>
					<li className='p-4 border-b bg-white uppercase border-gray-600 whitespace-nowrap'>
						Über uns
					</li>
				</Link>
				<Link to='contact' smooth={true} duration={500}>
					<li className='p-4 bg-white uppercase'>Kontakt</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
