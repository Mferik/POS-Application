import React from "react";

const ProductItem = ({product}) => {
  return (
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
  );
};

export default ProductItem;
