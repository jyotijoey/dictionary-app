// import axios from 'axios';
import React, { useState } from "react";
import "./ListItem.css";
import Modal from "react-modal";
import CloseIcon from '@material-ui/icons/Close';

function ListItem({ item }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({})

  function HandleClick(_id, term, definition, phrase) {
    setValue({_id, term, definition, phrase});
    setOpen(true);
    console.log(value);
    console.log(value._id);
  }
  return (
    <>
      {item.map(({ term, definition, phrase, _id, sDefinition }) => {
        return (
          <div>
          <div
            key={_id}
            className="listItem"
            onClick={() => HandleClick(_id, term, definition, phrase)}
          >
            <h1>{term.toUpperCase()}:</h1>
            <p>{sDefinition}</p>
            <p>{definition.substring(0, 30).toUpperCase()}...</p>
          </div>
          <Modal className="listItem__modal" isOpen={open}>
            <h1>{value.term}
            <button className="listItem__btn" onClick={()=>setOpen(false)}><CloseIcon /></button>
            </h1>
            
            <p>{value.definition}</p>
          </Modal>
          </div>
        );
      })}
    </>
  );
}

export default ListItem;
