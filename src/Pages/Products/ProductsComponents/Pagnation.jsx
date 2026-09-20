const Pagnation = ({ page, pageHandler ,dynamicPage }) => {
    const getPages =(current, total)=>{
const pages =[];
if (total <= 5){
    for(let i =1; i <= total; i++)
        pages.push(i)
}else{
    if(current <= 3){
        page.push(1,2,3,"...", total)
    }else if(current >= total-2){
        page.push(1,"...", total-2, total-1, total)
    }
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
