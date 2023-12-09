import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DescreaseIcon(props) {
  return (
    <Svg width={17} height={21} viewBox="0 0 17 21" fill="none" {...props}>
      <Path
        d="M5.484 7.222h5.851c.231 0 .458.08.653.233.196.152.353.37.452.628.117.307.162.648.13.984-.032.337-.14.655-.31.92l-2.926 4.391a1.286 1.286 0 01-.416.386c-.16.09-.333.137-.508.137-.176 0-.349-.047-.508-.137a1.286 1.286 0 01-.417-.386L4.56 9.986a2.057 2.057 0 01-.31-.919 2.196 2.196 0 01.13-.984c.099-.258.256-.476.451-.628.196-.152.422-.233.653-.233z"
        fill="#000"
        fillOpacity={0.75}
      />
    </Svg>
  );
}

export default DescreaseIcon;
