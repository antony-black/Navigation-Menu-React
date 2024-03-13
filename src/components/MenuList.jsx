import React from "react"
import MenuItem from "./MenuItem"

export default function MenuList ({menuData = []}) {
  return (
    <ul className="menu-list-container">
    {
      menuData && menuData.length
       ? menuData.map((listItem, index) => {
          return <MenuItem key={index} listItem={listItem}/>
        })
      : null
    }
  </ul>
  )
}
