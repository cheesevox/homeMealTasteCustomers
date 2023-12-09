import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function MinusIcon(props) {
  return (
    <Svg width={23} height={31} viewBox="0 0 23 31" fill="none" {...props}>
      <G clipPath="url(#clip0_697_1700)">
        <Path
          d="M11.5 23.013a11.59 11.59 0 01-8.132-3.318A11.243 11.243 0 010 11.685c0-3.004 1.212-5.886 3.368-8.01A11.59 11.59 0 0111.5.357c3.05 0 5.975 1.193 8.132 3.318A11.243 11.243 0 0123 11.685c0 3.004-1.212 5.886-3.368 8.01a11.589 11.589 0 01-8.132 3.318zm0-2.266c2.44 0 4.78-.954 6.505-2.654a8.994 8.994 0 002.695-6.408c0-2.404-.97-4.709-2.695-6.408A9.271 9.271 0 0011.5 2.623c-2.44 0-4.78.954-6.505 2.654A8.994 8.994 0 002.3 11.685c0 2.403.97 4.708 2.695 6.408a9.271 9.271 0 006.505 2.654zm5.75-10.195v2.266H5.75v-2.266h11.5z"
          fill="#FFAB01"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_697_1700">
          <Path
            d="M.435 6.287a6 6 0 016-6H17a6 6 0 016 6V30.19H.434V6.287z"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MinusIcon;
