import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import ContactImg from '../public/images/MichiyOli_contact2.webp';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const Custom404 = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => router.push('/'), 4000);
	}, []);
	return (
		<>
			<div className='w-full bg-white pt-16 px-4'>
				<div className='max-w-[1024px] min-h-full py-8 mx-auto'>
					<h1 className='mt-4 text-xl uppercase font-bold text-orange-400'>
						404
					</h1>
					<p className='mt-4 text-sm text-justify py-3'>
						Ooooops! Diese Seite existiert nicht. Hier gelangst du zurück auf
						die{' '}
						<Link className='font-bold text-orange-400' href='/'>
							Startseite
						</Link>
					</p>
					<Image
						alt=''
						className='w-full h-full object-cover'
						src={ContactImg}
					/>
				</div>
			</div>
		</>
	);
};

export default Custom404;
