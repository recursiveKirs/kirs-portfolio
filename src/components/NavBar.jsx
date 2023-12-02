import "./NavBar.css";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBarContent">
        <img src={logo} className="app-logo" alt="logo" />
        <button className="KirsImsongButton">Kirs Imsong</button>
        <button className="NavBarButton">Gallery</button>
        <button className="NavBarButton">Experience</button>
      </div>
    </div>
  );
};
