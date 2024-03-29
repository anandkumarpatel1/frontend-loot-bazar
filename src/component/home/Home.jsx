import React, { Fragment, useEffect } from "react";
import ProductCard from "../product/productCard/ProductCard";

import MetaData from "../layout/metaData/MetaData";
import { CgMouse } from "react-icons/cg";
import "./style.css";

import { getProduct, clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/Loader";

import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    window.scrollTo(0, 0);

    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Loot Bazar - Home" desc={"Best Online Shopping website for custom tshirts, special orders for colleges tshirt"} keyword={"loot bazar, custom tshirt, gp gaya tshirt, printed tshirt, online shopping, gp gaya, bihar polythenic, customiasble tshirt, computer science tshirt, civil tshirt, electronics tshirt, mechnical tshirt"}/>
          <div className="banner">
            <p>Welcome to Loot Bazar</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <div className="glow-on-hover">
              <a href="#container">
                <button>
                  Scroll
                  <CgMouse />
                </button>
              </a>
            </div>
          </div>
          <h2 className="homeHeading">Featured Product</h2>

          <div className="container" id="container">
            {products &&
              products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
