import React from "react";
import "../styles/RightMenu.css";
import { TiWeatherSnow, TiStarFullOutline, } from "react-icons/ti";
import { GiGuitar, GiTrumpet,  } from "react-icons/gi";
import { HiMusicNote,  } from "react-icons/hi";
import { CgPiano,  } from "react-icons/cg";
import {Button }from "../Components/Button"

function Shortcut() {
  return (
    <div className="ShortcutButtonContainer">
<h2>
    Shortcut
</h2>
<div className="ButtonContainers">
<Button icon = < TiWeatherSnow /> name= "Chill Hits" />
      <Button icon = < TiStarFullOutline /> name= "Hop" />
      <Button icon= < GiGuitar /> name= "Accoustic" />
      <Button icon= < HiMusicNote /> name= "Indie Pop" />
      <Button icon=< CgPiano />name= "Piano Blues" />
      <Button icon=< GiTrumpet /> name= "Jazz" />
</div>

    </div>
  );
}

export { Shortcut };
