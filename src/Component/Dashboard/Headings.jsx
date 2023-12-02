

const Headings = ({heading,subheading}) => {
    return (
        <div className="max-w-5xl text-[#333333] text-center box-border p-5 mx-auto  my-5">
            <h1 className="text-4xl  font-bold ">{heading}</h1>
            <div className="divider divider-[#4a90e2]"></div>
            <p className="py-2 text-lg">{subheading}</p>
            <div className="divider divider-[#4a90e2]"></div>
        </div>
    );
};

export default Headings;