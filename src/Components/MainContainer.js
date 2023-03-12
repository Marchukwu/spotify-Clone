import "../styles/MainContainer.css";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";
import { BiSearchAlt } from "react-icons/bi";
import { GoFlame } from "react-icons/go";
import { AiOutlineArrowLeft, AiOutlineArrowRight, } from "react-icons/ai";

function MainContainer() {
  // useEffect(() => {
  //   const allLi = document.querySelector(".menuList").querySelectorAll("li");

  //   function changePopularActive() {
  //     allLi.forEach((n) => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  // }, []);

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

      {/* <div className="menuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div> */}

      <AudioList />
    </div>
  );
}

export { MainContainer };
