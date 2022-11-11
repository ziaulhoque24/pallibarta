
function SectionHeading({ headingText }) {
    return (
        <>
            <div className="flex justify-start items-center 
            py-2 px-2 font-bold text-red-700
            text-[1.4rem]">
                {headingText}
            </div>
        </>
    );
}

export default SectionHeading;