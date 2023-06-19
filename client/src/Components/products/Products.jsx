import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

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
        <div className="product-item border hover:shadow-2xl cursor-pointer transition-all select-none">
          <div className="product-img">
            <img
              src={product.img}
              alt=""
              className="h-28 object-cover w-full border-b"
            />
          </div>
          <div className="product-info flex flex-col p-3">
            <span className="font-bold">{product.title}</span>
            <span>{product.price}₺</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
