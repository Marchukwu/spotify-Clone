import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { BiPulse, BiChart, } from "react-icons/bi";
import { FaBroadcastTower, FaLine, FaMicrophoneAlt, FaPodcast,  } from "react-icons/fa";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
  },
  // {
  //   id: 2,
  //   icon: <BiPulse />,
  //   name: "Discover",
  // },
  {
    id: 3,
    icon: <BiChart />,
    name: "Trend",
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcasts",
  },
];

export { MenuList };
