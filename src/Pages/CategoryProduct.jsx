import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
    const [searchData, setSearchData] = useState([])
    const params =useParams()
    const category =params.category
    const getFilterData = async ()=>{
        try {
           const res = await axios.get(`https://fakestoreapi.in/api/product/category?type=${category}`)
           const data =res.data.products 
           setSearchData(data)
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(category);
    useEffect
    
    return (
        <div>
            fsdese
        </div>
    );
};

export default CategoryProduct;