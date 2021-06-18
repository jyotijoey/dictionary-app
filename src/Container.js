import React from 'react';
import "./Container.css";
import ListItem from "./ListItem";

function Container({item}) {
    return (
        <div className="container">
        {/* passing the item to children */}
            <ListItem item={item} />
        </div>
    )
}

export default Container;
