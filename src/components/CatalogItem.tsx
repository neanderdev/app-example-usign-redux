import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { IProduct } from "../store/modules/cart/types";
import { addProductToCartRequest } from "../store/modules/cart/actions";

interface CatalogItemProps {
    product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {
    const dispatch = useDispatch();

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product));
    }, [dispatch, product]);

    return (
        <article>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {" "}

            <button
                type="button"
                onClick={handleAddProductToCart}
            >
                Comprar
            </button>
        </article>
    );
}