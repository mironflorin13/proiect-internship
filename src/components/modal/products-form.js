import React, { useState } from "react";

import Button from "../button/button";
import "./modal.scss";

function ProductsForm({
  closeModal,
  addProduct,
  editProduct,
  isEditMode,
  id,
  title,
  credit,
  imageURL,
  description,
}) {
  const [enteredTitle, setEnteredTitle] = useState(title || "");
  const [enteredImage, setEnteredImage] = useState(imageURL || "");
  const [enteredCredit, setEnteredCredit] = useState(credit || "");
  const [enteredDescription, setEnteredDescription] = useState(
    description || ""
  );

  const [enteredTitleErr, setEnteredTitleErr] = useState({});
  const [enteredImageErr, setEnteredImageErr] = useState({});
  const [enteredCreditErr, setEnteredCreditErr] = useState({});
  const [enteredDescriptionErr, setEnteredDescriptionErr] = useState({});

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const imageChangeHandler = event => {
    setEnteredImage(event.target.value);
  };

  const creditChangeHandler = event => {
    setEnteredCredit(Number.parseInt(event.target.value));
  };

  const descriptionChangeHandler = event => {
    setEnteredDescription(event.target.value);
  };

  const addNewProductHandler = event => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      if (isEditMode) {
        editProduct(
          id,
          enteredTitle,
          enteredImage,
          enteredCredit,
          enteredDescription
        );
      } else {
        addProduct(
          enteredTitle,
          enteredImage,
          enteredCredit,
          enteredDescription
        );
      }
      setEnteredTitle("");
      setEnteredImage("");
      setEnteredCredit("");
      setEnteredDescription("");
      closeModal();
    }
  };

  function formValidation() {
    const titleErr = {};
    const imageErr = {};
    const creditErr = {};
    const descriptionErr = {};
    let isValid = true;

    if (enteredTitle.trim().length === 0) {
      titleErr.titleEmpty = "Title cannot be empty";
      isValid = false;
    } else if (enteredTitle.trim().length < 3) {
      titleErr.titleShort = "Title is too short";
      isValid = false;
    } else if (enteredTitle.trim().length > 60) {
      titleErr.titleLong = "Title is too long";
      isValid = false;
    }

    if (enteredImage.trim().length === 0) {
      imageErr.imageEmpty = "Image cannot be empty";
      isValid = false;
    } else if (enteredImage.trim().length < 5) {
      imageErr.imageShort = "Image is too short";
      isValid = false;
    }
    // } else if (enteredImage.trim().length > 400) {
    //   imageErr.imageLong = "Image is too long";
    //   isValid = false;
    // }

    if (!enteredCredit) {
      creditErr.creditEmpty = "Credit cannot be empty";
      isValid = false;
    } else if (enteredCredit < 0) {
      creditErr.creditNegative = "Credit cannot be negative";
      isValid = false;
    }

    if (enteredDescription.trim().length === 0) {
      descriptionErr.descriptionEmpty = "Description cannot be empty";
      isValid = false;
    } else if (enteredDescription.trim().length < 4) {
      descriptionErr.descriptionShort = "Description is too short";
      isValid = false;
    } else if (enteredDescription.trim().length > 700) {
      descriptionErr.descriptionLong = "Description is too long";
      isValid = false;
    }

    setEnteredTitleErr(titleErr);
    setEnteredImageErr(imageErr);
    setEnteredCreditErr(creditErr);
    setEnteredDescriptionErr(descriptionErr);

    return isValid;
  }

  return (
    <div className="popup">
      <div className="inner-popup">
        <p className="modal-title">{id ? "Edit shop item" : "Add shop item"}</p>
        <form className="modal-form" onSubmit={addNewProductHandler}>
          <label htmlFor="title" className="modal-labels">
            Title
          </label>
          <input
            id="title"
            type="text"
            defaultValue={isEditMode ? title : enteredTitle}
            onChange={titleChangeHandler}
            className="modal-inputs"
          />
          {Object.keys(enteredTitleErr).map(item => (
            <div className="input-error" key={item.id}>
              {enteredTitleErr[item]}
            </div>
          ))}

          <div className="inputs-group">
            <div className="input-label-pair">
              <label htmlFor="image" className="modal-labels">
                Image URL
              </label>
              <input
                id="image"
                type="text"
                defaultValue={isEditMode ? imageURL : enteredImage}
                onChange={imageChangeHandler}
                className="modal-inputs"
              />

              {Object.keys(enteredImageErr).map(item => (
                <div className="input-error" key={item.id}>
                  {enteredImageErr[item]}
                </div>
              ))}
            </div>

            <div className="input-label-pair">
              <label htmlFor="credits" className="modal-labels">
                Credits cost
              </label>
              <input
                id="credits"
                type="number"
                defaultValue={isEditMode ? credit : enteredCredit}
                onChange={creditChangeHandler}
                className="modal-inputs"
              />

              {Object.keys(enteredCreditErr).map(item => (
                <div className="input-error" key={item.id}>
                  {enteredCreditErr[item]}
                </div>
              ))}
            </div>
          </div>
          <div className="inputs-column">
            <label htmlFor="description" className="modal-labels">
              Description
            </label>
            <input
              id="description"
              type="text"
              defaultValue={isEditMode ? description : enteredDescription}
              onChange={descriptionChangeHandler}
              className="modal-inputs"
            />

            {Object.keys(enteredDescriptionErr).map(item => (
              <div className="input-error" key={item.id}>
                {enteredDescriptionErr[item]}
              </div>
            ))}
          </div>
          <div className="modal-buttons">
            <Button
              type="btn secondary"
              value="Cancel"
              handleOnClick={closeModal}
            />
            <Button
              type="btn primary flex-width-max"
              value={isEditMode ? "Edit" : "Add"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductsForm;
