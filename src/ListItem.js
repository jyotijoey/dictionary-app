// import axios from 'axios';
import React, { useState } from "react";
import "./ListItem.css";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";

function ListItem({ item }) {
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
    setValue({ _id, term, definition, phrase, sDefinition, spell, phrase2 });
    setOpen(true);
    console.log(value);
    console.log(value._id);
  }
  return (
    <>
    <h3 className="listItem__header">Word List</h3>
    <div className="listItem__border"></div>
      {item.map(
        ({ term, definition, phrase, _id, sDefinition, spell, phrase2 }) => {
          return (
            <div>
              <div
                key={_id}
                className="listItem"
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

              <Modal className="listItem__modal" isOpen={open}>
              <button
                    className="listItem__btn"
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon />
                  </button>
                <h1>{value.term}</h1>
                <h4>{value?.sDefinition}</h4>
                <h4>Phonetic Spelling: {value?.spell}</h4>
                <p>{value?.definition}</p>
                <div className="listItem__phrases">
                <h5>Used Cases</h5>
                <li>{value?.phrase}</li>
                <li>{value?.phrase2}</li>
                </div>
              </Modal>
            </div>
          );
        }
      )}
    </>
  );
}

export default ListItem;
