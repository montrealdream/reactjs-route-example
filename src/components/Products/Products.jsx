import { ProductItem } from "./ProductItem";

export const Products = (props) => {
    const products = props.products;

    return (
        <>
            <div className="products">
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </div>
        </>
    );
}