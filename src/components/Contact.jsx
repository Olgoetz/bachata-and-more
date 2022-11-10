import ContactImg from '../../public/images/MichiyOli_contact.jpg';
import Image from 'next/image';
const Contact = () => {
	return (
		<div className='w-full bg-black py-16 px-4'>
			<div className='max-w-[1024px] mx-auto'>
				<p
					name='contact'
					className='text-xl uppercase font-bold text-orange-400'
				>
					Kontakt
				</p>
				<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>
					Schreibt uns für Anfragen
				</h1>
				<div className='my-4'>
					<Image
						alt=''
						className='w-full h-full object-cover'
						src={ContactImg}
					/>
				</div>

				<form className='w-full flex mx-auto flex-col gap-3 flex-wrap items-center'>
					<div className='w-full flex flex-col'>
						<label className='uppercase font-bold text-white'>Name</label>
						<input className='bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' />
					</div>
					<div className='w-full flex flex-col'>
						<label className='uppercase font-bold text-white'>Vorname</label>
						<input className='bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' />
					</div>
					<div className='w-full flex flex-col'>
						<label className='uppercase font-bold text-white'>
							Email-Adresse
						</label>
						<input className='bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' />
					</div>
					<div className='w-full flex flex-col'>
						<label className='uppercase font-bold text-white'>Nachricht</label>
						<textarea
							maxLength='500'
							rows='4'
							type='text'
							id='subject'
							name='subject'
							className=' bg-gray-100 text-gray-900 form-input mt-2 p-3 rounded-md'
							required
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
