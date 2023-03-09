import { useForm } from 'react-hook-form';
import ContactImg from '../../public/images/MichiyOli_contact.webp';
import Image from 'next/image';
import { sendEmail } from '../../helpers/api-utils';
import { useState } from 'react';
import { ClockLoader } from 'react-spinners';

const Contact = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({ message: '', status: 0 });
	const {
		register,
		handleSubmit,
		reset,

		formState: { errors },
	} = useForm();

	const cleanUp = async () => {
		reset();
		setTimeout(() => setSubmitStatus({ message: '', status: 0 }), 5000);
	};

	const onSubmit = async (data) => {
		const emailBody = `
			<div>
				<h1 style='padding-bottom:15px;'>Hi Michi und Oli,</h1>
				Eine neue Nachricht kam gerade rein:
				<div style='font-size:12px;padding-top:12px;'>
					<p>Vorname: ${data.firstName}</p>
					<p>Nachname: ${data.lastName}</p>
					Email: ${data.email}
					<p>
						Nachricht: <br />
						${data.message}
					</p>
				</div>
			</div>
		`;

		const email = {
			sourceAddress: process.env.EMAIL_SOURCE_ADDRESS,
			subject: `Neue Nachricht von ${data.firstName}`,
			message: emailBody,
			recipients: process.env.EMAIL_RECIPIENT_ADDRESSES,
		};
		setIsLoading(true);
		const response = await sendEmail(email);
		setIsLoading(false);
		console.log(response);
		if ('error' in response['result']['emailApiResponse']) {
			setSubmitStatus({
				status: 500,
				message: 'Someting went wrong. Please try again!!',
			});
		}
		if (response.statusCode != 200) {
			setSubmitStatus({
				status: response.statusCode,
				message: 'Someting went wrong. Please try again!!',
			});
		} else {
			setSubmitStatus({
				status: response.statusCode,
				message: 'Message sent',
			});
		}

		await cleanUp();
	};
	return (
		<>
			<div id='contact' className='w-full bg-black py-16 px-4'>
				<div className='max-w-[1024px] pt-8 mx-auto'>
					<p
						name='contact'
						className='text-xl uppercase font-bold text-orange-400'
					>
						Contact
					</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>
						Write us for more information
					</h1>
					<div className='grid md:grid-cols-2 md:gap-x-4'>
						<div className='my-4'>
							<Image
								alt='Michi-und-Oli_BachataSensual'
								className='w-full h-full object-cover'
								src={ContactImg}
							/>
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className='w-full flex mx-auto flex-col gap-3 flex-wrap items-center'
						>
							<div className='w-full flex flex-col'>
								<label
									htmlFor='lastname'
									className='uppercase font-bold text-white'
								>
									Last Name
								</label>
								<input
									id='lastname'
									name='lastName'
									type='text'
									{...register('lastName', {
										required: 'Lastname required',
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
								<label
									htmlFor='firstName'
									className='uppercase font-bold text-white'
								>
									First name
								</label>
								<input
									id='firstName'
									name='firstName'
									type='text'
									{...register('firstName', {
										required: 'Firstname required',
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
								<label
									htmlFor='email'
									className='uppercase font-bold text-white'
								>
									Email address
								</label>
								<input
									id='email'
									name='email'
									type='text'
									{...register('email', {
										required: 'Email address required',
										pattern: {
											value:
												/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
											message: 'A valid email address is required',
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
								<label
									htmlFor='message'
									className='uppercase font-bold text-white'
								>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									{...register('message', {
										required: 'Message must not be empty',
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
								Send
							</button>
							{isLoading && (
								<div className='w-full mt-1 flex flex-col items-center'>
									<ClockLoader color='#ffffff' size={50} />
								</div>
							)}
							{submitStatus.status === 200 && (
								<div className='w-full mt-1 flex flex-col items-center'>
									<p className='text-green-600 '>{submitStatus.message}!</p>
								</div>
							)}
							{submitStatus.status !== 200 && (
								<div className='w-full mt-1 flex flex-col items-center'>
									<p className='text-red-500 '>{submitStatus.message}</p>
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
