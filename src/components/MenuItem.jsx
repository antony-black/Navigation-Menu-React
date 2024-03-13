import React from "react"
import { useState } from "react"
import MenuList from "./MenuList"
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem ({listItem}) {
  const [showChildren, setShowChildren] = useState({});

  function handleToggleChildren(listItemlabel) {
    setShowChildren({
      ...showChildren,
      [listItemlabel]: !showChildren[listItemlabel],
    });
    console.log(showChildren);
  }

  const isChildren = () => {
    return listItem && listItem.children && listItem.children.length 
  }
  return (
    <li>
  <div className="item">
  <p>{listItem.label}</p>
    {isChildren() ? <span className="switcher" onClick={() => handleToggleChildren(listItem.label)}>
      {
        showChildren[listItem.label] ? <FaMinus/> : <FaPlus/>
      }
    </span> : null}
  </div>
    {isChildren() && showChildren[listItem.label] ? <MenuList menuData={listItem.children}/> : null}
  </li>
  )
}