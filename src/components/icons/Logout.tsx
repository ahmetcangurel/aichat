import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgLogout = (props: SvgProps) => (
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
      d="M9.333 20H5.778A1.778 1.778 0 0 1 4 18.222V5.778A1.778 1.778 0 0 1 5.778 4h3.555M15.556 16.444 20 12l-4.444-4.444M20 12H9.333"
    />
  </Svg>
);
export default SvgLogout;
