import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import DeleteCard from '@/Components/DeleteCard/DeleteCard'
import { toast } from 'react-toastify'
const Product = () => {

  const [loading, setLoading] = useState(false);
  

    let [data , setData] = useState([])
      const [search, setSearch] = useState("");

  let navigate = useNavigate()
  // let {recipes , deleteCart} = props
useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setData(response.data.products);
          setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data[0]);
    
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  
  function DeleteCard (id){
    console.log(id);
    

    let newData =   data.filter((ele)=> ele.id !==  id)
    console.log(newData);
    
setData(newData)
deletePRoduct()
  }
//   console.log(data);

    const deletePRoduct = () =>toast.success("Product deleted  ", {
        position: "top-right",
        autoClose: 2000,
      });
      
  
  return (
  <>

          <div className="container mt-5">
        <h2 className="fs-1">my product : </h2>
        { loading?  
  <Container style={{  padding: "20px" }}>
    <input
         type="text"
         placeholder="Search..."
         className="form-control my-3"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />
 
  <Row xs={1} md={3} className="g-4"> 
    {filteredProducts?.map((item) => (
      <Col key={item.id}>
        <Card style={{ width: "100%", height: "100%",  color: "white" }}>
          <Card.Img 
            variant="top" 
            style={{ height: "100%" }} 
            src={item.images[0]} 
          />
          <Card.Body>
            <Card.Title style={{color:"black"}}>{item.title}</Card.Title>
            <Card.Text style={{color:"black"}}>
              {item.description.slice(0, 100)}...
            </Card.Text>
            <Button variant="dark "    onClick={() => navigate(`/product/${item.id}`)} >More Details</Button>
            <Button variant="danger " onClick={()=>DeleteCard(item.id)} className='ms-2'>delete</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

  :  <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border"></div>
    </div>}

    </div>
      
  </>
    
  )
}

export default Product
