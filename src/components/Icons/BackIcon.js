import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function BackIcon(props) {
  const { width = 26, height = 19, color = "#fff" } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 19"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_394_2027)">
        <Path
          d="M2.103 8.382a1.557 1.557 0 000 2.241l8.124 7.917a1.658 1.658 0 002.3 0 1.557 1.557 0 000-2.241l-5.356-5.215h15.58c.898 0 1.624-.708 1.624-1.584 0-.876-.726-1.583-1.625-1.583H7.17l5.353-5.215a1.557 1.557 0 000-2.242 1.658 1.658 0 00-2.3 0L2.097 8.377l.006.005z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_394_2027">
          <Path
            fill={color}
            transform="rotate(-90 9.5 9.5)"
            d="M0 0H19V26H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BackIcon;
