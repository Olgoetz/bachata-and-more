import Image from 'next/image';
import Workout from '../public/images/gewichtheben.png';
import Dance from '../public/images/partymenschen.png';
import BodyMind from '../public/images/yoga.png';
const More = () => {
	return (
		<div id='more' className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1024px] pt-8 mx-auto'>
				<p className='text-xl uppercase font-bold text-orange-400'>MORE</p>
				<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-20'>
					Workout, Dance, Body & Mind
				</h1>
				<div className='text-justify mx-auto grid md:grid-cols-3 md:gap-x-3'>
					<div className='w-full shadow-xl rounde-lg p-4 my-8 flex flex-col justify-center'>
						<Image src={Workout} className='w-20 mx-auto mt-[-3rem]' alt='' />
						<h2 className='text-2xl font-bold text-center py-8'>Workout</h2>
						<div className='text-center font-medium'>
							<p className='py-2 border-b mx-8'>
								Hight-Intensity-Intervall-Training (HIIT)
							</p>
							<p className='py-2 border-b mx-8'>Animal Flow</p>
							<p className='py-2 mx-8'>
								Kraftausdauertraining mit und ohne Hilfsmittel
							</p>
						</div>
					</div>
					<div className='w-full shadow-xl rounde-lg p-4 my-8 flex flex-col justify-center'>
						<Image src={Dance} className='w-20 mx-auto mt-[-3rem]' alt='' />
						<h2 className='text-2xl font-bold text-center py-8'>Dance</h2>
						<div className='text-center font-medium'>
							<p className='py-2 border-b mx-8'>
								Motto Stunden: 80er, 90er sowie HipHop
							</p>
							<p className='py-2 border-b mx-8'>Einfache Choreographien</p>
							<p className='py-2 mx-8'>Cardiotraining</p>
						</div>
					</div>
					<div className='w-full shadow-xl rounde-lg p-4 my-8 flex flex-col justify-center'>
						<Image src={BodyMind} className='w-20 mx-auto mt-[-3rem]' alt='' />
						<h2 className='text-2xl font-bold text-center py-8'>Body & Mind</h2>
						<div className='text-center font-medium'>
							<p className='py-2 border-b mx-8'>Yoga Flow</p>
							<p className='py-2 border-b mx-8'>Sinnvoller Aufbau der Asanas</p>
							<p className='py-2 mx-8'>Mobility- und Bewegelichkeitstraining</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default More;