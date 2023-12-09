import * as React from "react";
import Svg, { Path } from "react-native-svg";

function KitchenIcon(props) {
  const { size, color } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M15.833 12.5v-10c-4.013 3.828-4.186 6.932-4.167 10h4.167zm0 0v5H15V15M6.666 3.333V17.5m-2.5-14.167v2.5a2.5 2.5 0 005 0v-2.5"
        stroke={color}
        strokeOpacity={0.71}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default KitchenIcon;
