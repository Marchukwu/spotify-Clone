import React from "react";
import "../styles/RightMenu.css";
// import Profile from "../img/profile.jpg";
import { Shortcut } from "../Components/shortcut"
import { FavArtist } from "./FavArtist";
import { Profile } from "./Profile";


function RightMenu() {
  return (
    <div className="rightContainer">
      <div className="shortcutContainer">
      <Shortcut/>
      </div>
      <div className="faveArtistContainer">
        <FavArtist />
      </div>
      <div className="artistContainer">
        < Profile />
      </div>

    </div>
  );
}

export { RightMenu };


