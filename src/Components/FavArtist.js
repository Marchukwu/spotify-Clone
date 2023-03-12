import {Artist} from "../Components/Artist";
import artistImg from "../img/profile.jpg";
import artistImg2 from "../img/Profile1.jfif";
import artistImg3 from "../img/Profile2.jfif";
import artistImg4 from "../img/Profile3.jfif";
// import artistImg from "../img/Profile1.jfif";
import "../styles/RightMenu.css";

function FavArtist (){
return (
    <div className="FavArtist">
        <h2>Fav Artist</h2>

        <div>
            < Artist icon = {artistImg} name = "Taylor Swift" totalSongs = {196} />
        </div> < Artist icon = {artistImg2} name = "Kenya West" totalSongs = {124} />
        < Artist icon = {artistImg3} name = "Drake" totalSongs = {50} />
        < Artist icon = {artistImg4} name = "Billie Eilish" totalSongs = {15} />
    </div>

)
}

export {FavArtist}