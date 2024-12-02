import { Link } from "react-router-dom";

export const ProductItem = (props) => {
    const product = props.product;

    return (
        <>
            <div className="product-item">
                <div className="product-image">
                    <img 
                        src={product.images[0]}
                        alt={product.title}
                     />
                </div>

                <Link to={`/product/${product.id}`} className="product-title">
                    {product.title}
                </Link>
            </div>
        </>
    );
}