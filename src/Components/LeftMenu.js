import React from "react";
import "../styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import {DiscoverList} from "./DiscoverList"
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";
function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaSpotify />
          </i>

          <h2>Mara<span>Music</span></h2>
        </div>

        <i>
          <FaEllipsisH />
        </i>
      </div>
      <Menu title={"Menu"} listObject={MenuList} />
      <Menu title={"Discover"} listObject={DiscoverList} />

      <MenuPlayList />

      <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
    </div>
  );
}

export { LeftMenu };
