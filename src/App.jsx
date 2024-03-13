import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MenuList from "./components/MenuList";
import { MenuData } from "./constants/menuData";
import "./index.scss";

export default function App() {
  // const [menuData, setMenuData] = useState(MenuData);

  return (
    <div className="main-container">
      <MenuList menuData={MenuData}/>
    </div>
  );
}
