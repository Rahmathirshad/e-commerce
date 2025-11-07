//import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import FormatPrice from "../Helpers/FormatPrice";
import { useDispatch } from "react-redux";
import { quantitydecrement, quantityIncrement, removeFromCart } from "../store/slices/CartSlice";

const CartItem = ({ id, title: name, image, quantity, color, price, amount }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p className="itemName">{name}</p>
                </div>
            </div>

            {/* price   */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            {/* Quantity  */}
            <CartAmountToggle
                amount={quantity}
                setDecrease={() => dispatch(quantitydecrement(id))}
                setIncrease={() => dispatch(quantityIncrement(id))}
            />

            {/* //Subtotal */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * quantity} />
                </p>
            </div>

            <div>
                <FaTrash className="remove_icon" onClick={() => dispatch(removeFromCart(id))} />
            </div>
        </div>
    );
};

export default CartItem;
