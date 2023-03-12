import {ReactComponent as OrderedSvg} from "./icons/success-svgrepo-com.svg";
import {Box, Container} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {selectorBasketProduct} from "../../selectors";
import './OrderedSuccesseful.scss';
import ProductCard from "../../components/ProductCard";
import SearchBlock from "../Main/components/SearchBlock";
import {useEffect} from "react";
import {actionBasketProduct, actionDeleteFromBasket} from "../../reducers";
import {actionIsOrdered} from "../../reducers/basket.reducer";
import Button from "../../components/Button";

const OrderedSuccessful = () => {
    const basketProduct = useSelector(selectorBasketProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        basketProduct.map(product => dispatch(actionDeleteFromBasket(product)));


        localStorage.setItem("basket", JSON.stringify([]));

        return(() => {
            dispatch(actionBasketProduct([]));
            dispatch(actionIsOrdered(false));
        })
    }, [])
    const productBasket = useSelector(selectorBasketProduct);

    return (
        <>
            <Box className="ordered">
                <Container maxWidth="lg" className="ordered__container">
                    <Box className="ordered__wrapper">
                        <OrderedSvg className="ordered-svg"/>
                        <h3 className="ordered__title">Thank you ! Your order is: </h3>
                        <Box className="ordered__items">
                            {productBasket.map(product => <ProductCard el={product} isForOrderedPage={true}/>)}
                        </Box>
                        <Button type="button" variant="gradient-green" to="/products" text="All products"/>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default OrderedSuccessful;