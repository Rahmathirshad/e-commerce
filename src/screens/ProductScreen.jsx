import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { fetchProductDetail } from '../store/slices/ProductDetailSlice';
import { addToCart } from '../store/slices/CartSlice';
import { Button } from "../common-components/Button";
import FormatPrice from '../Helpers/FormatPrice';
import Loader from '../common-components/Loader';
import { toast } from 'react-toastify';

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item: product, status } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.cart);

  let goToCart = items.find((item) => item._id === product.id);

  useEffect(() => {
    dispatch(fetchProductDetail(id))
  }, [id]);

  if (status === 'loading') return <Loader />
  if (status === 'failed') return <p>Failed to load Products</p>
  return (
    <Section>
      <div className="container">
        <img src={product.image} alt="image error" className="img" />
        <div className="details">
          <h2 className="title">{product.title}</h2>
          <h2 className="price"><FormatPrice price={product.price} /></h2>
          <p className="category">Category - {product.category}</p>
          <p className="description">Description - {product.description}</p>
          <p className="rating">Rating - {product?.rating} | Total Count - {product?.rating + 3}</p>
          <div className="btns">
            {!goToCart ? <Button onClick={() => {
              toast("Added Successfully 👍");
              dispatch(addToCart(product));
            }}>ADD TO CART</Button> :
              <NavLink to='/cart'><Button>Go To Cart</Button></NavLink>}
            <Button className='wishlist-btn'>WISHLIST</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
.container{
  display: flex;
  justify-content: center;
  padding: 6rem 12rem;
  gap: 8rem;
  .img{
    max-width: 22vw;
    max-height: 30rem;
  }
  .details{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
  }
  .btns{
    display: flex;
    gap: 5rem;

    .wishlist-btn{
      pointer-events: none;
      opacity: 0.5;
    }
  }
}

@media screen and (max-width: 700px) {
.container{
  display: block;
  padding: 6rem 6rem;
  .img{
    display: flex;
    justify-self: center;
    max-width: 40vw;
  }
  h2{
    font-size: large;
  }
}
}
`;

export default ProductScreen