import React, { useEffect } from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";
import { getProducts } from "../../redux/Shopping/shopping-actions";

const Products = ({ products, getProducts }) => {

  console.log(products)

  // getProducts()

  useEffect(() => {
    getProducts()
    }, [getProducts])



  return (
    <div className={styles.products}>
      {products && products.map((product) => {
        return (

        <Product key={product.id} product={product} />)
})
}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   getProducts: () => dispatch(getProducts)
// })
export default connect(mapStateToProps, {getProducts})(Products);
