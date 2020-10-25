import React from "react";
import PropTypes from "prop-types";
import "./Nav.css";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BarchartIcon from "@material-ui/icons/BarChartSharp";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

const Nav = ({}) => {
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
          // label="Recents"
          icon={<FavoriteIcon />}
          onClick={() => {
            routeTo("/feedview");
          }}
        />
        <BottomNavigationAction
          // label="Add Donation"
          icon={<AddIcon />}
          onClick={() => {
            routeTo("/editview");
          }}
        />
        <BottomNavigationAction
          // label="Nearby"
          icon={<BarchartIcon />}
          onClick={() => {
            routeTo("/leaderboard");
          }}
        />
      </BottomNavigation>
    </div>
  );
};

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
