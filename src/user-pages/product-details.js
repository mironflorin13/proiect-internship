import { useState, useEffect } from "react";
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

const ProductDetails = () => {
  const id = Number.parseInt(useParams().id);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [product, setProduct] = useState({});

  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    getSingleProduct(id)
      .then(product => {
        setProduct(product);
        setLength(product.imageURL.length);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  }, [id]);

  const nextSlide = () => {
    setCurrent(prevCurrent => prevCurrent + 1);
  };

  const prevSlide = () => {
    setCurrent(prevCurrent => prevCurrent - 1);
  };

  const changeSlide = id => {
    setCurrent(id);
  };

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
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
            <Button
              type="btn primary"
              value={`Buy - ${product.credit} Credits `}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;