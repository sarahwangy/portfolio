import './style.scss'

const Product = ({ link, img }) => {
    return (
        <div className='pro'>
            <div className="browser">
                <div className="circle"></div>

                <div className="circle"></div>

                <div className="circle"></div>
            </div>
            <a href={link} target="_blank" >

                <img scr={img} alt='' className='img' />
            </a>
        </div>
    )
}

export default Product;