import "../styles/RightMenu.css"

function Artist({ icon, name , totalSongs}) {
    return (
        <div className="ArtistList">
            <div className="top">
            <img src= {icon} alt="" />
            </div>
            <div className="bottom">
                <h3> {name}</h3>
                <p>{totalSongs} <span>songs in library</span></p>
            </div>
        </div>
    );
  }
  
  export { Artist };