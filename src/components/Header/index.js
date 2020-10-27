import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// ICONS
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header-logo"
            src="https://raw.githubusercontent.com/moisestech/movYou-react/master/public/mov-you-logo-landscape.png"
            alt="YouTube Logo"
          />
        </Link>
      </div>
      <div className="header-input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-input-button" />
        </Link>
      </div>
      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        />
      </div>
    </div>
  );
}

Header.propTypes = {};
