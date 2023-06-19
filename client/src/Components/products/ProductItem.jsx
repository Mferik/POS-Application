import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
 
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({...product,quantity:1}))
  }
  
  return (
    <div className="product-item border hover:shadow-2xl cursor-pointer transition-all select-none" onClick={handleClick}>
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
