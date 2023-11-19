import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEnlarge = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.333 12.889v5.333A1.778 1.778 0 0 1 15.556 20H5.778A1.778 1.778 0 0 1 4 18.222V8.444a1.778 1.778 0 0 1 1.778-1.777h5.333M14.667 4H20v5.333M10.222 13.778 20 4"
    />
  </Svg>
);
export default SvgEnlarge;
