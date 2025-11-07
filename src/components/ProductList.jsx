import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { fetchProducts } from '../store/slices/ProductsSlice';
import FormatPrice from '../Helpers/FormatPrice';
import Loader from '../common-components/Loader';

const ProductList = () => {
  const dispatch = useDispatch();
  const {items, status} = useSelector((state) => state.products);

  useEffect(() => {
    if(status === 'idle') dispatch(fetchProducts())
  }, [status]);

  if(status === 'loading') return <Loader />
    if(status === 'failed') return <p>Failed to load Products</p>
  return (
    <Section>
      {items.map((item, key) => <NavLink to={`/product/${item.id}`} key={key}>
        <div className="product-card">
          <img className='img' src={item.image} alt="" />
          <h4 className="title">{item.title}</h4>
          <p className="description">{item.description}</p>
          <h4 className="price"><FormatPrice price={item.price} /></h4>
        </div>
      </NavLink>)}
    </Section>
  )
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  justify-content: center;
  gap: 4rem 3rem;
  padding-top: 5rem;
  
  .product-card{
    padding: 2rem 0.9rem 0.6rem 0.9rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    border-radius: 3px;
    transition: 0.3s;
    &:hover{
      transform: scale(1.1);
    }

    .img{
      display: flex;
      justify-self: center;
      width: 16rem;
      height: 25vh;
    }
    .title{
      padding: 0.6rem 0 ;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; 
    }
    .description{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #959697;
      font-size: small;
      margin: 0 0 0.4rem 0;
    }
  }
`
export default ProductList