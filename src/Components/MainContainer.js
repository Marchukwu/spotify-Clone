import "../styles/MainContainer.css";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";
import { BiSearchAlt } from "react-icons/bi";
import { GoFlame } from "react-icons/go";
import { AiOutlineArrowLeft, AiOutlineArrowRight, } from "react-icons/ai";

function MainContainer() {
  return (
    <div className="mainContainer">

      <div className="upperDiv">
<div className="arrowIcon">
  <i>
< AiOutlineArrowLeft />
  </i>

  <i>
< AiOutlineArrowRight />
  </i>
</div>
      <div className="searchBox">
        <input type="text" placeholder="Search for artists, songs and..." />
        <i>
          <BiSearchAlt />
        </i>
      </div> 
      </div>
      <p className="whatHot">What,s hot <span><i> <GoFlame /> </i></span></p> 
      <h1 className="whatHotHeading">Trending</h1>

      <Banner />
      <AudioList />
    </div>
  );
}

export { MainContainer };
