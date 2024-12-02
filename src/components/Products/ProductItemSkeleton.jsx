import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const ProductItemSkeleton = (props) => {
    return (
        <>
            <div className="product-item">
                <Skeleton className="product-image" /> 
                <Skeleton className="product-title" /> 
            </div>
        </>
    );
}