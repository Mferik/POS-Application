import { useEffect, useState } from "react";
import {PlusOutlined,EditOutlined} from '@ant-design/icons'
import ProductItem from "./ProductItem";
import Add from "./Add";
import { useNavigate } from "react-router-dom";

const Products = ({categories}) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate()
  

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="products-wrapper grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-4">
      {products.map((product) => (
        <ProductItem product={product} key={product._id}/>
      ))}
       <div className="product-item border hover:shadow-2xl cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90 min-h-[180px]" onClick={() => setIsAddModalOpen(true)} >
        <PlusOutlined className="text-white md:text-2xl"/>
       </div>
       <div className="product-item border hover:shadow-2xl cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[180px]">
        <EditOutlined className="text-white md:text-2xl" onClick={() => navigate("/products")}/>
       </div>
       <Add isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen}
       categories={categories}
       setProducts={setProducts}
       products={products}
       />
    </div>
  );
};

export default Products;
