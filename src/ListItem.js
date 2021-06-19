// import axios from 'axios';
import React, { useState } from "react";
import "./ListItem.css";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";

Modal.setAppElement("#root");
function ListItem({ item }) {
  // to handle the opening and closing of modal
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({});

  function HandleClick(
    _id,
    term,
    definition,
    phrase,
    sDefinition,
    spell,
    phrase2
  ) {
    // to set the current item props in value to be used in modal
    setValue({ _id, term, definition, phrase, sDefinition, spell, phrase2 });
    setOpen(true);
    // for debugging purpose
    console.log(value);
    console.log(value._id);
  }
  return (
    <div className="listItem__container">
      <div className="listItem__head">
        <h3 className="listItem__header">Word List</h3>
        <div className="listItem__headBorder"></div>
      </div>
      <div className="listItem__items">
        {/* to map each item in the items list */}
        {item.map(
          ({ term, definition, phrase, _id, sDefinition, spell, phrase2 }) => {
            return (
              <>
                <div
                  key={_id}
                  className="listItem"
                  // to send data to dynamically create modals for individual items
                  onClick={() =>
                    HandleClick(
                      _id,
                      term,
                      definition,
                      phrase,
                      sDefinition,
                      spell,
                      phrase2
                    )
                  }
                >
                  <h1>{term}</h1>
                  <p>{sDefinition}</p>
                </div>
                <div className="listItem__border"></div>
                {/* defining modals */}
                <Modal className="listItem__modal" isOpen={open}>
                  <button
                    className="listItem__btn"
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon />
                  </button>
                  {/* using "?" to make sure that the app does not crash if the value is not there */}
                  <h1>{value.term}</h1>
                  <div className="listItem__border"></div>
                  <h4>{value?.sDefinition}</h4>
                  <h4>Phonetic Spelling: {value?.spell}</h4>
                  <p>{value?.definition}</p>
                  <div className="listItem__phrases">
                    <h5>Used Cases</h5>
                    <li>{value?.phrase}</li>
                    <li>{value?.phrase2}</li>
                  </div>
                </Modal>
              </>
            );
          }
        )}
      </div>
    </div>
  );
}

export default ListItem;
