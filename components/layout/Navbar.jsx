import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

//import { Link } from 'react-scroll';
import Link from 'next/link';
const Navbar = () => {

	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

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

					? 'fixed w-full h-20 shadow-xl z-[100] bg-white duration-300 px-2'
					: 'fixed w-full px-2 h-20 z-[100] bg-black md:text-white'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2'>
				<Link href='/'>
					<h1 className='block text-3xl font-bold text-orange-400'>
						Bachata&More.
					</h1>
				</Link>

					<ul className='uppercase hidden md:flex'>
						<li className='ml-10 text-sm hover:border-b'>
							<Link href='/'>Home</Link>
						</li>

						<li className='ml-10 text-sm hover:border-b'>
							<Link href='/#bachata'>Bachata</Link>
						</li>
						<li className='ml-10 text-sm  hover:border-b'>
							<Link href='/#contact'>Contact</Link>
						</li>
						<li className='ml-10 text-sm  hover:border-b whitespace-nowrap'>
							<Link href='/#aboutus'>About Us</Link>
						</li>
					</ul>

					{/* Hamburger */}

					<div onClick={handleNav} className=' text-orange-400 md:hidden z-10 cursor-pointer'>
						{!nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25} />}
					</div>

				
						<div
							className={
								nav
									? 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center bg-white p-12'
									: 'absolute left-[-100%] top-0 p-10'
							}
						>
									<ul className='uppercase text-3xl'>
										<Link href='/' >
											<li
												onClick={() => setNav(false)}
												className='py-4 border-b'
											>
												Home
											</li>
										</Link>


										<Link href='/#bachata' >
											<li
												onClick={() => setNav(false)}
												className='py-4  border-b'

											>
												Bachata
											</li>
										</Link>

									

										<Link href='/#contact' >
											<li
												onClick={() => setNav(false)}
												className='py-4  border-b'

											>
												Contact
											</li>
										</Link>

										<Link href='/#aboutus' >
											<li
												onClick={() => setNav(false)}
												className='py-4 whitespace-nowrap border-b'

											>
												About Us
											</li>
										</Link>
									</ul>

								
					
						</div>

			</div>
		</div>
    );
};

export default Navbar;
