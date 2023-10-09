import { Link } from "react-router-dom";


import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="customNavBar">
      <wired-tabs selected="Menu" >
        <wired-tab name="Menu" >
          <nav className="linkMenu">
            <wired-button elevation="2" class="customButton">
              <Link to="/"> Galeria </Link>
            </wired-button>
            <wired-button elevation="2" class="customButton">
            <Link to="/favorites"> Favoritos </Link>
          </wired-button>

          </nav>
        </wired-tab>
      </wired-tabs>
    </div>
  );
};

export default NavigationBar;
