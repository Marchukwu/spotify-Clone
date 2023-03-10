import "../styles/RightMenu.css"

function ArtistProfile ({ArtistPics, name , SongName}){
    return (
        <div className="ArtistProfile">
            <div className="Pics">
                <img src= {ArtistPics} alt ="" />
            </div>
            <div className="Below">
                <h3> {SongName} </h3>
                <p> {name}</p>
            </div>
        </div>
    )
}
export {ArtistProfile}