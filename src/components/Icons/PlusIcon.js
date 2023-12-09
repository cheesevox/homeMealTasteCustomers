import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlusIcon(props) {
  return (
    <Svg width={50} height={50} viewBox="0 0 38 38" fill="none" {...props}>
      <Path
        d="M31.391 19.413a1.537 1.537 0 01-1.536 1.537h-9.731v9.731a1.536 1.536 0 11-3.073 0V20.95H7.319a1.536 1.536 0 010-3.073h9.731V8.145a1.536 1.536 0 013.074 0v9.732h9.73a1.537 1.537 0 011.537 1.536z"
        fill="#000"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default PlusIcon;
