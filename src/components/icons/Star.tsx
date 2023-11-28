import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgStar = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 44 44"
    {...props}>
    <Path
      fill="#fff"
      d="M17.31 3.673c1.612-4.354 7.768-4.354 9.38 0l2.885 7.798a5 5 0 0 0 2.954 2.954l7.798 2.886c4.354 1.61 4.354 7.767 0 9.378l-7.798 2.886a5 5 0 0 0-2.954 2.954l-2.886 7.798c-1.61 4.354-7.767 4.354-9.378 0l-2.886-7.798a5 5 0 0 0-2.954-2.954l-7.798-2.886c-4.354-1.61-4.354-7.767 0-9.378l7.798-2.886a5 5 0 0 0 2.954-2.954l2.886-7.798Z"
    />
  </Svg>
);
export default SvgStar;
