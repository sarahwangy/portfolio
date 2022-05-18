import "./style.scss";
import Product from "../../components/product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="plist">
      <div className="texts">
        <h1 className="title"> create & inspire</h1>
        <p className="desc">
          {/* <b> */}
          Take a look at some of my projects, which demostrate what I learned and gained recently.
          {/* </b> */}
        </p>
      </div>
      <div className="pl-list">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              img={product.img}
              link={product.link}
              codeLink={product.codeLink}
              desc={product.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
