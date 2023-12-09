import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MessageIcon(props) {
  const { size = 35, color = "#fc8403" } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 35 35" fill="none" {...props}>
      <Path
        d="M17.5 4.375c8.02 0 14.583 5.22 14.583 11.667 0 6.445-6.562 11.666-14.583 11.666-1.809 0-3.544-.262-5.148-.729-4.258 3.646-9.436 3.646-9.436 3.646 3.398-3.398 3.938-5.688 4.01-6.563-2.478-2.085-4.01-4.914-4.01-8.02C2.917 9.596 9.48 4.375 17.5 4.375z"
        fill={color}
      />
    </Svg>
  );
}

export default MessageIcon;
