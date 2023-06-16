import React from "react";
import "./Header.css";
import Logo from "./images/edyoda_logo.png";

function Header() {
  return (
    <nav>
      <div className="container">
        <div className="left_content">
          <div className="drop_down">
            <img src={Logo} alt="" className="logo1" />
          </div>
          <div className="drop_down">
            <span className="drop_text">Courses</span>
            <img
              src="https://th.bing.com/th/id/R.7d3303eb997fed186811a07cfc7d4522?rik=cq4llNRs1Bc0Vg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_121183.png&ehk=mWTAODVmFSn0Z34CWbBTqT2bH%2fdszl5cekriLkrwyvg%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="icon_chevrot"
            />
          </div>
          <div className="drop_down">
            <span className="drop_text">Programs</span>
            <img
              src="https://th.bing.com/th/id/R.7d3303eb997fed186811a07cfc7d4522?rik=cq4llNRs1Bc0Vg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_121183.png&ehk=mWTAODVmFSn0Z34CWbBTqT2bH%2fdszl5cekriLkrwyvg%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="icon_chevrot"
            />
          </div>
        </div>

        <div className="right_content">
          <div className="search_icon">
            <img
              className="search_icon"
              src="https://www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png"
              alt=""
            />
          </div>
          <span className="log_in">Log in</span>
          <button className="primary_button">JOIN NOW</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
