import React from "react";
import PropTypes from "prop-types";
/*---------------Import sprite---------------*/
import sprite from "../../images/svg/sprite.svg";

function SvgIcon(props) {
  const { iconName, iconClass } = props;
  return (
    <svg className={iconClass}>
      <use href={sprite + `#${iconName}`} />
    </svg>
  );
}

SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};
export default SvgIcon;
