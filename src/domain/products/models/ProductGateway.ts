import axios  from "axios";



const ProductGateway =()=> {
  const resp =  axios.get("http://localhost:3000/api/products/");
  console.log(resp);

return{
    resp
}
};

export default ProductGateway;
