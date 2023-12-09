import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BellIcon(props) {
  const { color = "#000" } = props;

  return (
    <Svg width={27} height={32} viewBox="0 0 27 32" fill="none" {...props}>
      <Path
        d="M26.625 25.708v1.459H.375v-1.459l2.917-2.916v-8.75c0-4.521 2.96-8.503 7.291-9.786v-.423a2.917 2.917 0 015.834 0v.423a10.194 10.194 0 017.291 9.785v8.75l2.917 2.917zm-10.208 2.917a2.916 2.916 0 11-5.834 0"
        fill={color}
      />
    </Svg>
  );
}

export default BellIcon;
