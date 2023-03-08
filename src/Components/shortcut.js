import React from "react";
import "../styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../img/profile.jpg";
import { TiWeatherSnow, TiStarFullOutline, } from "react-icons/ti";
import { GiGuitar,  } from "react-icons/gi";
import { HiMusicNote,  } from "react-icons/hi";
import {Button }from "../Components/Button"

function Shortcut() {
  return (
    <div className="ShortcutButtonContainer">
<h4>
    Shortcut
</h4>
<div className="ButtonContainers">
<Button icon = < TiWeatherSnow /> name= "Chill Hits" />
      <Button icon = < TiStarFullOutline /> name= "Hop" />
      <Button icon= < GiGuitar /> name= "Accoustic" />
      <Button icon= < HiMusicNote /> name= "Indie Pop" />
      <Button icon={"Menu"} name= "Piano Blues" />
      <Button icon={"Menu"} name= "Jazz" />
</div>


    </div>
  );
}

export { Shortcut };
