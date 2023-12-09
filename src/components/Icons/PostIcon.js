import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PostIcon(props) {
  const { size, color } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M13.75 5.625h2.56a.625.625 0 01.621.563L17.312 10h-1.257l-.313-3.125H13.75V8.75a.625.625 0 11-1.25 0V6.875h-5V8.75a.625.625 0 01-1.25 0V6.875H4.256l-1 10H10v1.25H2.565a.626.626 0 01-.621-.688l1.125-11.25a.625.625 0 01.62-.562h2.56v-.436C6.25 3.02 7.92 1.25 10 1.25s3.75 1.771 3.75 3.939v.437-.001zm-1.25 0v-.436C12.5 3.696 11.372 2.5 10 2.5c-1.373 0-2.5 1.196-2.5 2.689v.437h5v-.001zm3.934 9.45L15 13.643v4.482a.625.625 0 11-1.25 0v-4.482l-1.433 1.432a.625.625 0 11-.883-.884l2.5-2.5a.625.625 0 01.883 0l2.5 2.5a.627.627 0 01-.197 1.028.626.626 0 01-.686-.144z"
        fill={color}
      />
    </Svg>
  );
}

export default PostIcon;
