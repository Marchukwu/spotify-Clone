import React from "react";
import "../styles/RightMenu.css";
import Profile from "../img/profile.jpg";
import { Shortcut } from "../Components/shortcut"


function RightMenu() {
  return (
    <div className="rightContainer">
      <div className="shortcutContainer">
      <Shortcut/>
      </div>
      <div className="faveArtistContainer">
{/** favourite artiste */}
      </div>
      <div className="artistContainer">
        {/* arstists container */}
      </div>
    </div>
  );
}

export { RightMenu };


{/* <div className="goPro">
        <i>
          <FaCrown />
          <p>
            <span> Go</span>Pro
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>

        <div className="profileImage">
          <img src={Profile} alt="" />
        </div>
      </div> */}