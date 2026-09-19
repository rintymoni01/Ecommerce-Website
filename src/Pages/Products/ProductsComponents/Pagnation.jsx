
const Pagnation = ({page , pageHandler}) => {
    return (
        <div className="mt-10 space-x-4">
            <button className={`${page === 1 ? "bg-red-400" : "bg-red-500"}`}>Prev</button>

            <button>Next</button>

           
        </div>
    );
};

export default Pagnation;