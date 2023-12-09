import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IncreaseIcon(props) {
  return (
    <Svg
      style={{
        flex: 1,
      }}
      {...props}
    >
      <Path d="M10 10H110V110H10z" stroke="red" fill="#00f" />
    </Svg>
  );
}

export default IncreaseIcon;
