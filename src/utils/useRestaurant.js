import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurant = (id) =>{
    const [resData, setResData] = useState(null);
    useEffect(()=>{
        fetchResData();
     },[])
     async function fetchResData(){
         const data = await fetch(MENU_URL+id);
         const json = await data.json();
         console.log(json.data);
         setResData(json.data);  
     }
     return resData;
};

export default useRestaurant;