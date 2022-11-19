import { useForm } from 'react-hook-form';
import ContactImg from '../public/images/MichiyOli_contact.jpg';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
const Contact = () => {
	// const [inputs, setInputs] = useState({
	// 	lastname: '',
	// 	forename: '',
	// 	email: '',
	// 	message: '',
	// });

	// const handleChange = (event) => {
	// 	const name = event.target.name;
	// 	const value = event.target.value;
	// 	setInputs((values) => ({ ...values, [name]: value }));
	// };
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	setInputs({ lastname: '', forename: '', email: '', message: '' });
	// };
	const [submitStatus, setSubmitStatus] = useState({ message: '', status: 0 });
	const {
		register,
		handleSubmit,
		reset,

		formState: { errors },
	} = useForm();

	console.log('erros', errors);
	const onSubmit = async (data) => {
		console.log(data);
		try {
			const result = await emailjs.send(
				'service_kzia32x',
				'template_ofu6vkv',
				data,
				'WIQpvQ2eC1E8tBmhX'
			);
			console.log(result);
			setSubmitStatus({ status: result.status, message: result.text });
			reset();
			setTimeout(setSubmitStatus({ status: 0 }), 5000);
		} catch (error) {
			console.log(error.text);
			setSubmitStatus({ status: error.status, message: error.text });
		}
	};
	return (
		<div id='contact' className='w-full bg-black py-16 px-4'>
			<div className='max-w-[1024px] pt-8 mx-auto'>
				<p
					name='contact'
					className='text-xl uppercase font-bold text-orange-400'
				>
					Kontakt
				</p>
				<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>
					Schreibt uns für Anfragen
				</h1>
				<div className='grid md:grid-cols-2 md:gap-x-4'>
					<div className='my-4'>
						<Image
							alt=''
							className='w-full h-full object-cover'
							src={ContactImg}
						/>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='w-full flex mx-auto flex-col gap-3 flex-wrap items-center'
					>
						<div className='w-full flex flex-col'>
							<label className='uppercase font-bold text-white'>Name</label>
							<input
								name='lastName'
								type='text'
								{...register('lastName', {
									required: 'Nachname wird benötigt',
								})}
								className='bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
							/>
							{
								<p className='pt-2 text-sm text-orange-400'>
									{errors.lastName?.message}
								</p>
							}
						</div>
						<div className='w-full flex flex-col'>
							<label className='uppercase font-bold text-white'>Vorname</label>
							<input
								name='firstName'
								type='text'
								{...register('firstName', {
									required: 'Vorname wird benötigt',
								})}
								className='bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
							/>
							{
								<p className='pt-2 text-sm text-orange-400'>
									{errors.firstName?.message}
								</p>
							}
						</div>
						<div className='w-full flex flex-col'>
							<label className='uppercase font-bold text-white'>
								Email-Adresse
							</label>
							<input
								name='email'
								type='text'
								{...register('email', {
									required: 'Email Adresse wird benötigt',
									pattern: {
										value:
											/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: 'Eine gültige Email Adresse wird benötigt',
									},
								})}
								//value={inputs.email}
								//onChange={handleChange}
								className='bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
							/>
							{
								<p className='pt-2 text-sm text-orange-400'>
									{errors.email?.message}
								</p>
							}
						</div>
						<div className='w-full flex flex-col'>
							<label className='uppercase font-bold text-white'>
								Nachricht
							</label>
							<textarea
								name='message'
								{...register('message', {
									required: 'Nachricht darf nicht leer sein',
								})}
								//value={inputs.message}
								//onChange={handleChange}
								maxLength='500'
								rows='4'
								type='text'
								className=' bg-gray-100 text-gray-900 form-input mt-2 p-3 rounded-md'
							/>
							{
								<p className='pt-2 text-sm text-orange-400'>
									{errors.message?.message}
								</p>
							}
						</div>
						<button
							className='flex mt-2 py-3 flex-col border rounded-lg w-full items-center text-white curser-pointer hover:bg-orange-300 active:bg-orange-500'
							type='submit'
						>
							Abschicken
						</button>
						{submitStatus.status === 200 ? (
							<p className='text-white'>Success</p>
						) : (
							''
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
