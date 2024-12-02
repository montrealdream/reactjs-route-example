import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { ProductItem } from "../../components/Products/ProductItem";
import { ProductItemSkeleton } from "../../components/Products/ProductItemSkeleton";

export const ProductDetail = () => {
    const [product, setProduct] = useState(null);

    const params = useParams();
    const productId = params.productId;

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, []);

    return (
        <>
            <h1>Trang chi tiết sản phẩm</h1>

            {
                product
                ? <ProductItem product={product}/>
                : <ProductItemSkeleton />
            }
        </>
    );
}