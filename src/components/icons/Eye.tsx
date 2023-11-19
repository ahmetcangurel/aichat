import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEye = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M1.5 15C1.5 9.15 6.15 4.5 12 4.5S22.5 9.15 22.5 15H21c0-4.95-4.05-9-9-9s-9 4.05-9 9H1.5m6 0c0-2.55 1.95-4.5 4.5-4.5s4.5 1.95 4.5 4.5-1.95 4.5-4.5 4.5-4.5-1.95-4.5-4.5M9 15c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3-3 1.35-3 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEye;
