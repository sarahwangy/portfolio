import "./style.scss";
import CodeImg from "../../assets/img/code.jpeg";

const Product = ({ link, img, codeLink, desc }) => {
  return (
    <div className="pro">
      <div className="browser">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div
        style={{ backgroundImage: `url(${img})` }}
        className="bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center hover:-translate-y-10 transition duration-350 ease-in-out w-full h-full items-center mx-auto content-div "
      >
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100">
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-2xl font-bold bg-white text-white rounded-lg px-2 py-2 m-2 tracking-wider">
            {desc}
          </span>
          <div className="pt-8 text-center">
            <a href={link}>
              <button className="hover:scale-125 hover:bg-white text-center rounded-lg px-4 py-3 m-2 bg-lime-500 text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href={codeLink}>
              <button className="hover:scale-125 hover:bg-white text-center rounded-lg px-4 py-3 m-2 bg-lime-500 text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <a href={link} target="_blank">
        <img src={img} alt="" className="img" />
      </a> */}
    </div>
  );
};

export default Product;
