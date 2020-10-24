import React from "react";
import PropTypes from "prop-types";
import "./Nav.css";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const routeTo = (route) => {
    history && history.push(route);
  };
  return (
    <div className="Nav">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className="bottom-navigation"
      >
        <BottomNavigationAction
          label="Recents"
          icon={<RestoreIcon />}
          onClick={() => {
            routeTo("/feedview");
          }}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          onClick={() => {
            routeTo("/listingview");
          }}
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
          onClick={() => {
            routeTo("/editview");
          }}
        />
      </BottomNavigation>
    </div>
  );
};

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
