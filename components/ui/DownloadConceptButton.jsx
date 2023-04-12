const DownloadConceptButton = () => {
  return (
    <>
      <button className="bg-[#FFC08E] text-black text-sm md:text-lg font-bold rounded-md px-6 py-3 uppercase hover:bg-orange-300 active:bg-orange-500">
        <a
          href="https://bachata-and-more.s3.eu-central-1.amazonaws.com/documents/Bachata%26More.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Konzept
        </a>
      </button>
    </>
  );
};

export default DownloadConceptButton;
