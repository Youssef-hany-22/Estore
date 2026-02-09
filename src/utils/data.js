import { useEffect, useState } from "react";

   let [data , setData] = useState([])

useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  export default data
