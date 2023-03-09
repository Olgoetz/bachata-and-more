const DownloadConceptButton = (props) => {
	return (
		<>
			<button className='bg-orange-400 text-black text-sm md:text-lg font-bold rounded-md px-6 py-3 uppercase hover:bg-orange-300 active:bg-orange-500'>
				<a
					href='https://bachata-and-more.s3.eu-central-1.amazonaws.com/marketing-kit/bachata-marketing-kit.zip'
					target='_blank'
					rel='noreferrer'
				>
					Download Marketing Kit
				</a>
			</button>
		</>
	);
};

export default DownloadConceptButton;
