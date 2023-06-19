import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import CartTotals from "../Components/cart/CartTotals";
import Categories from "../Components/categories/Categories";
import Products from "../Components/products/Products";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();

        data &&
          setCategories(
            data.map((category) => {
              return { ...category, value: category.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories max-h-[calc(100vh_-_112px)] overflow-y-auto  md:pb-10">
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto ">
          <Products categories={categories} setCategories={setCategories} />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default HomePage;
