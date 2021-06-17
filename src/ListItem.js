// import axios from 'axios';
import React from "react";
import "./ListItem.css";

function ListItem({ item }) {
  return (
    <>
      {item.map(({term, definition, phrase, _id}) => {
        return (
          <div key={_id} className="listItem">
            <h1>{term}</h1>
            <p>{definition.substring(0, 35)}...</p>
          </div>
        );
      })}
    </>
  );
}

export default ListItem;
