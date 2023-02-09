import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

//import { Link } from 'react-scroll';
import Link from 'next/link';
const Navbar = () => {

	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const links = [
		{
			id: 1,
			link: "home"
		},
		{
			id: 2,
			link: "bachata"
		},
		{
			id: 3,
			link: "more"
		},
		{
			id: 4,
			link: "events"
		},
		{
			id: 5,
			link: "kontak"
		},
		{
			id: 6,
			link: "über uns"
		},
	]

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
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
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
							<Link href='/#more'>More</Link>
						</li>
						<li className='ml-10 text-sm  hover:border-b'>
							<Link href='/#events'>Events</Link>
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

				
						<div
							className={
								nav
									? 'absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-white p-12 duration-500'
									: 'absolute left-[-100%] top-0 p-10 duration-500'
							}
						>
							<div>
								<div className='flex w-full justify-between align-center'>
									<h1 className='block text-5xl font-bold text-orange-400'>
										Bachata&More.
									</h1>
								
								</div>
								
									<ul className='uppercase flex flex-col text-3xl'>
										<Link href='/' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 border-b'
											>
												Home
											</li>
										</Link>

										<Link href='/#bachata' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4  border-b'
											>
												Bachata
											</li>
										</Link>
										<Link href='/#more' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 border-b'
											>
												More
											</li>
										</Link>
										<Link href='/#events' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 border-b'
											>
												Events
											</li>
										</Link>
										<Link href='/#contact' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4  border-b'
											>
												Kontakt
											</li>
										</Link>
										<Link href='/#aboutus' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4  whitespace-nowrap border-b'
											>
												Über uns
											</li>
										</Link>
									</ul>
								
							</div>
						</div>
			</div>
		</div>
    );
};

export default Navbar;
