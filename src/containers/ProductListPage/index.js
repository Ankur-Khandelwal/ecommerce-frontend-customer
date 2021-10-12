/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../actions/product.action';
import Layout from '../../components/Layout';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';

function ProductListPage(props) {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  const productByPriceArray = Object.keys(product.productsByPrice);

  return (
    <Layout>
      {productByPriceArray.map((key, index) => {
        const productArray = product.productsByPrice[key];
        if (productArray.length !== 0) {
          return (
            <div className="card">
              <div className="cardHeader">
                <div>{props.match.params.slug} mobile {key}</div>
                <button>View All</button>
              </div>
              <div style={{display: 'flex'}}>
                {productArray.map((product) => (
                  <div className="productContainer">
                    <div className="productImgContainer">
                      <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                    </div>
                    <div className="productInfo">
                      <div style={{ margin: '5px 0' }}>{product.name}</div>
                      <div>
                        <span>4.3</span>
                        &nbsp;
                        <span>5123</span>
                      </div>
                      <div className="productPrice">{product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      })}
    </Layout>
  );
}

export default ProductListPage;
