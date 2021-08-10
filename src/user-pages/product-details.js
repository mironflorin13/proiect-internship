import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import getSingleProduct from "../mock-functions/get-single-product";
import Button from "../components/button/button";
import "./product-details.scss";
import { Context } from "../context/context-provider";
import addProductToAUser from "../mock-functions/add-product-to-a-user";

const ProductDetails = () => {
  const id = Number.parseInt(useParams().id);

  const [isPending, setIsPending] = useState(true);
  const [product, setProduct] = useState({});

  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const [bought, setBought] = useState(false);
  const { userData, updateUserData, roleType } = useContext(Context);

  const productsRequest = getProduct => {
    getProduct()
      .then(product => {
        setProduct(product);
        setLength(product.imageURL.length);
        setBought(product.bought);
        setIsPending(false);
      })
      .catch(error => {
        alert(error);
        setIsPending(false);
      });
  };
  useEffect(() => {
    productsRequest(() => getSingleProduct(id, userData.id, roleType));
  }, [id, roleType, userData.id]);

  const nextSlide = () => {
    setCurrent(prevCurrent => prevCurrent + 1);
  };

  const prevSlide = () => {
    setCurrent(prevCurrent => prevCurrent - 1);
  };

  const changeSlide = id => {
    setCurrent(id);
  };

  const buyProduct = productId => async () => {
    await productsRequest(() =>
      addProductToAUser(userData.id, productId, true)
    );
    updateUserData();
  };

  if (isPending) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="product-details-page">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => {
            window.history.back();
          }}
          className="x-close"
        />

        <div className="images-slider">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevSlide}
            className={`arrow a-left ${current === 0 && "hide"}`}
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={nextSlide}
            className={`arrow a-right ${
              (current === length || current === length - 1) && "hide"
            }`}
          />

          {product.imageURL &&
            product.imageURL.map((url, index) => (
              <div
                className={`slide ${index === current && "image-active"}`}
                key={index}
              >
                {index === current && (
                  <img src={url} alt="product image" className="image" />
                )}
              </div>
            ))}

          <div className="cercles">
            {length > 1 &&
              product.imageURL.map((a, index) => (
                <div
                  className={`cercle ${index === current && "darker"}`}
                  key={index}
                  onClick={() => changeSlide(index)}
                />
              ))}
          </div>
        </div>
        <div className="right-side">
          <div className="product-details">
            <div className="product-details-title">{product.title}</div>
            <div className="product-details-description">
              {product.description}
            </div>
            {bought && (
              <Button
                type="btn primary"
                value={`Buy - ${product.credit} Credits `}
                handleOnClick={buyProduct(product.id)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
