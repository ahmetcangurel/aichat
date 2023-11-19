import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgLike = (props: SvgProps) => (
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
      d="M7.573 11.1 11.23 3c.727 0 1.425.284 1.94.79.514.507.803 1.194.803 1.91v3.6h5.176a1.854 1.854 0 0 1 1.401.619 1.794 1.794 0 0 1 .428 1.45l-1.262 8.1c-.066.43-.287.821-.623 1.102a1.847 1.847 0 0 1-1.206.429H7.573m0-9.9V21m0-9.9H4.829c-.485 0-.95.19-1.293.527A1.785 1.785 0 0 0 3 12.9v6.3c0 .477.193.935.536 1.273.343.337.808.527 1.293.527h2.744"
    />
  </Svg>
);
export default SvgLike;
