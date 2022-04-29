import "./style.scss";
import Product from "../product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="plist">
      <div className="texts">
        <h1 className="title"> create$ inspire</h1>
        <p className="desc">
          React has been a very hard mental switch, It took me by surprise and the learning curve
          was very difficult in the beginning. Today I am more confident in React however there is
          so much to learn.
        </p>
      </div>
      <div className="pl-list">
        {products.map((product) => {
          return <Product key={product.id} img={product.img} link={product.link} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
