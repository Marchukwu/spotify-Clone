import { ArtistProfile } from "./ArtistPorfile";
import Artist from "../img/artist.jpg"

function Profile (){
    return (
        <div className="PLayingContainer">
           < ArtistProfile ArtistPics={ Artist} name = "Kana Nishino" SongName= "Torisetsu トリセツ" />
        </div>
    )
}

export {Profile}
