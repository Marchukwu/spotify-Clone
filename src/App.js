
import axios from "axios";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import { useEffect, useState } from "react";


function App() {
  const CLIENT_ID = "bd93c5252313480a82a8a7b7bac511e3";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      console.log(token);

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div> No Image </div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <div className="loginContainer">
            <h1> Mara Music</h1>
            <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to spotify
          </a>
          </div>
       
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          // <form onSubmit={searchArtists}>
          //   <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          //   <button type={"submit"}>Search</button>
          // </form>

          
                <div className="App">
                  <div className=""></div>
                  <LeftMenu />
                  <MainContainer />
                  <RightMenu />
            
                  <div className="background"></div>
                </div>
            
        ) : (
          <h2>Please Login</h2>
        )}

        {renderArtists()}
      </header>
    </div>
  );
}




// function App() {
//   return (
//     <div className="App">
//       <div className=""></div>
//       <LeftMenu />
//       <MainContainer />
//       <RightMenu />

//       <div className="background"></div>
//     </div>
//   );
// }

export default App;
