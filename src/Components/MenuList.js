import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import {  BiChart, } from "react-icons/bi";
import { FiCompass, } from "react-icons/fi"

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
  },

  {
    id: 2,
    icon: <BiChart />,
    name: "Trend",
  },
     {
    id: 3,
    icon: <FiCompass />,
    name: "Feed",
  },
 
];

export { MenuList };
