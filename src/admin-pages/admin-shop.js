import React, { useState, useEffect, useContext } from "react";

import getAllProducts from "../mock-functions/get-all-products";
import addProduct from "../mock-functions/add-product";
import editProduct from "../mock-functions/edit-product";
import deleteProduct from "../mock-functions/delete-product";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import ShopCard from "../components/shop-card/shop-card";
import ProductsForm from "../components/modal/products-form";
import Modal from "../components/modal/modal";
import { Context } from "../context/context-provider";
import { ROLES_STATUSES } from "../data/constants";

const AdminShop = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [product, setProduct] = useState();

  const { setRoleType } = useContext(Context);

  const productsRequest = getProducts => {
    getProducts()
      .then(products => {
        setAllProducts(products);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  useEffect(() => {
    setRoleType(ROLES_STATUSES.ADMIN);
    productsRequest(getAllProducts);
  }, [setRoleType]);

  function addNewProduct(title, imageURL, credit, description) {
    productsRequest(() => addProduct(title, imageURL, credit, description));
  }

  function handleEdit(id, title, imageURL, credit, description) {
    productsRequest(() =>
      editProduct(id, title, imageURL, credit, description)
    );
  }

  function handleDelete(id) {
    productsRequest(() => deleteProduct(id));
  }

  function closeModalHandler() {
    setIsVisible(false);
    setProduct();
  }

  function handleOnEdit(product) {
    setIsVisible(true);
    setProduct(product);
  }

  function handleOnAdd() {
    setIsVisible(true);
  }

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="challenges-container">
        <ChallengesSection title="Shop">
          <>
            <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
              <ProductsForm
                isEditMode={Boolean(product)}
                {...product}
                closeModal={closeModalHandler}
                addProduct={addNewProduct}
                editProduct={handleEdit}
              />
            </Modal>

            {allProducts.length ? (
              allProducts.map(product => (
                <ShopCard {...product} key={product.id}>
                  <Button
                    type="btn secondary "
                    value="Delete"
                    handleOnClick={() => handleDelete(product.id)}
                  />
                  <Button
                    type="btn primary flex-width-max"
                    value="Edit"
                    handleOnClick={() => handleOnEdit(product)}
                  />
                </ShopCard>
              ))
            ) : (
              <h2 className="challenges-subtilte">No Products to display</h2>
            )}
            <Button
              type="btn primary fix"
              value="Add New"
              handleOnClick={handleOnAdd}
            />
          </>
        </ChallengesSection>
      </div>
    );
  }
};

export default AdminShop;
