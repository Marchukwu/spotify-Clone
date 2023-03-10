import {Artist} from "../Components/Artist";
import artistImg from "../img/profile.jpg";
import "../styles/RightMenu.css";

function FavArtist (){
return (
    <div className="FavArtist">
        <h2>Fav Artist</h2>

        <div>
            < Artist icon = {artistImg} name = "Taylor Swift" totalSongs = {196} />
        </div> < Artist icon = {artistImg} name = "Kenya West" totalSongs = {124} />
        < Artist icon = {artistImg} name = "Drake" totalSongs = {50} />
        < Artist icon = {artistImg} name = "Billie Eilish" totalSongs = {15} />
    </div>

)
}

export {FavArtist}