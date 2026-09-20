const Pagnation = ({ page, pageHandler ,dynamicPage }) => {
    const getPages =(current, total)=>{
const pages =[];
if (total <= 5){
    for(let i =1; i <= total; i++)
        pages.push(i)
}
    }
  return (
    <div className="mt-10 space-x-4">
      <button
        disabled={page === 1}
        className={`${page === 1 ? "bg-red-400" : "bg-red-500"} text-white px-3 py-1 
        rounded-md cursor-pointer`} >
        Prev
      </button>

      <button  disabled={page === dynamicPage}
        className={`${page === dynamicPage ? "bg-red-400" : "bg-red-500"} text-white px-3 py-1 
        rounded-md cursor-pointer`}>Next</button>
    </div>
  );
};

export default Pagnation;
