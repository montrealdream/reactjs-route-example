import { useState, useEffect } from 'react';
import { Products } from '../../components/Products/Products';
import { ProductItemSkeleton } from '../../components/Products/ProductItemSkeleton';

export const ProductPage = () => {
    // setup sản phẩm
    const [products, setProducts] = useState(null);

    // sử dụng useEffect để fetch API
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://dummyjson.com/products?limit=10`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                });
        }, 1000);
    }, []);

    return (
        <>
            <h1>TRANG SẢN PHẨM</h1>

            {
                products 
                ?   <Products products={products} />
                :   <ProductItemSkeleton />
            }
        </>
    );
}