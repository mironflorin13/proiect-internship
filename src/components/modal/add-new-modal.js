import React, { useState } from "react";

import Button from "../button/button";
import "./add-new-modal.scss";

function AddNewModal({
  closeModal,
  addChallenge,
  editChallenge,
  isEditMode,
  id,
  title,
  xp,
  credits,
  description,
}) {
  const [enteredTitle, setEnteredTitle] = useState(title ? title : "");
  const [enteredXP, setEnteredXP] = useState(xp ? xp : "");
  const [enteredCredits, setEnteredCredits] = useState(credits ? credits : "");
  const [enteredDescription, setEnteredDescription] = useState(
    description ? description : ""
  );

  const [enteredTitleErr, setEnteredTitleErr] = useState({});
  const [enteredXPErr, setEnteredXPErr] = useState({});
  const [enteredCreditsErr, setEnteredCreditsErr] = useState({});
  const [enteredDescriptionErr, setEnteredDescriptionErr] = useState({});

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const xpChangeHandler = event => {
    setEnteredXP(Number.parseInt(event.target.value));
  };

  const creditsChangeHandler = event => {
    setEnteredCredits(Number.parseInt(event.target.value));
  };

  const descriptionChangeHandler = event => {
    setEnteredDescription(event.target.value);
  };

  const addNewChallengeHandler = event => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      if (isEditMode) {
        editChallenge(
          id,
          enteredTitle,
          enteredXP,
          enteredCredits,
          enteredDescription
        );
      } else {
        addChallenge(
          enteredTitle,
          enteredXP,
          enteredCredits,
          enteredDescription
        );
      }
      setEnteredTitle("");
      setEnteredXP("");
      setEnteredCredits("");
      setEnteredDescription("");
      closeModal();
    }
  };

  function formValidation() {
    const titleErr = {};
    const xpErr = {};
    const creditsErr = {};
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

    if (!enteredXP) {
      xpErr.xpEmpty = "XP cannot be empty";
      isValid = false;
    } else if (enteredXP < 0) {
      xpErr.xpNegative = "XP cannot be negative";
      isValid = false;
    }

    if (!enteredCredits) {
      creditsErr.creditsEmpty = "Credits cannot be empty";
      isValid = false;
    } else if (enteredCredits < 0) {
      creditsErr.creditsNegative = "Credits cannot be negative";
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
    setEnteredXPErr(xpErr);
    setEnteredCreditsErr(creditsErr);
    setEnteredDescriptionErr(descriptionErr);

    return isValid;
  }

  return (
    <div className="popup">
      <div className="inner-popup">
        <p className="modal-title">{id ? "Edit challenge" : "Add challenge"}</p>
        <form className="modal-form" onSubmit={addNewChallengeHandler}>
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
              <label htmlFor="xp" className="modal-labels">
                XP earned on completion
              </label>
              <input
                id="xp"
                type="number"
                defaultValue={isEditMode ? xp : enteredXP}
                onChange={xpChangeHandler}
                className="modal-inputs"
              />

              {Object.keys(enteredXPErr).map(item => (
                <div className="input-error" key={item.id}>
                  {enteredXPErr[item]}
                </div>
              ))}
            </div>

            <div className="input-label-pair">
              <label htmlFor="credits" className="modal-labels">
                Credits earned on completion
              </label>
              <input
                id="credits"
                type="number"
                defaultValue={isEditMode ? credits : enteredCredits}
                onChange={creditsChangeHandler}
                className="modal-inputs"
              />

              {Object.keys(enteredCreditsErr).map(item => (
                <div className="input-error" key={item.id}>
                  {enteredCreditsErr[item]}
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

export default AddNewModal;
