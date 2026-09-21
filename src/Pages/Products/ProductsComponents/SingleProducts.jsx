import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const SingleProducts = () =>{ 
    const params = useParams()
    console.log(params);}
    const getsingleProduct = async ()=>{
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
        
    };
    useEffect(()=>{
       getsingleProduct()
    },[]);
    
    return (
        <div>
            hjjshs
        </div>
    );
};

export default SingleProducts;