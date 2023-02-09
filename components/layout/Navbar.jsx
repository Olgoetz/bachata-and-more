import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

//import { Link } from 'react-scroll';
import Link from 'next/link';
const Navbar = () => {
<<<<<<< HEAD
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

=======

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

>>>>>>> optimizing
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
<<<<<<< HEAD
					? 'fixed w-full h-20 shadow-xl z-[100] bg-white ease-in-out duration-300 px-2'
					: 'fixed w-full px-2 h-20 z-[100] bg-black md:text-white'
			}
			//className='absolute w-full h-20 shadow-xl z-[100] bg-white ease-in-out duration-300 px-5'
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/' legacyBehavior>
=======
					? 'fixed w-full h-20 shadow-xl z-[100] bg-white duration-300 px-2'
					: 'fixed w-full px-2 h-20 z-[100] bg-black md:text-white'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
>>>>>>> optimizing
					<h1 className='block text-3xl font-bold text-orange-400'>
						Bachata&More.
					</h1>
				</Link>
<<<<<<< HEAD
				<div>
=======
				
>>>>>>> optimizing
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
<<<<<<< HEAD
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
										<Link href='/' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
=======
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
>>>>>>> optimizing
											>
												Home
											</li>
										</Link>

<<<<<<< HEAD
										<Link href='/#bachata' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
=======
										<Link href='/#bachata' >
											<li
												onClick={() => setNav(false)}
												className='py-4  border-b'
>>>>>>> optimizing
											>
												Bachata
											</li>
										</Link>
<<<<<<< HEAD
										<Link href='/#more' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
=======
										<Link href='/#more' >
											<li
												onClick={() => setNav(false)}
												className='py-4 border-b'
>>>>>>> optimizing
											>
												More
											</li>
										</Link>
<<<<<<< HEAD
										<Link href='/#events' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
=======
										<Link href='/#events' >
											<li
												onClick={() => setNav(false)}
												className='py-4 border-b'
>>>>>>> optimizing
											>
												Events
											</li>
										</Link>
<<<<<<< HEAD
										<Link href='/#contact' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm border-b'
=======
										<Link href='/#contact' >
											<li
												onClick={() => setNav(false)}
												className='py-4  border-b'
>>>>>>> optimizing
											>
												Kontakt
											</li>
										</Link>
<<<<<<< HEAD
										<Link href='/#aboutus' legacyBehavior>
											<li
												onClick={() => setNav(false)}
												className='py-4 text-sm whitespace-nowrap border-b'
=======
										<Link href='/#aboutus' >
											<li
												onClick={() => setNav(false)}
												className='py-4 whitespace-nowrap border-b'
>>>>>>> optimizing
											>
												Über uns
											</li>
										</Link>
									</ul>
<<<<<<< HEAD
								</div>
							</div>
						</div>
					</div>
				</div>
=======
								
					
						</div>
>>>>>>> optimizing
			</div>
		</div>
    );
};

export default Navbar;
