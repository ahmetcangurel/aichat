import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgDotsThree = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#fff"
      d="M18 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M12 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M6 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25"
    />
    <Path
      stroke="#fff"
      strokeWidth={0.4}
      d="M18 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM12 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM6 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    />
  </Svg>
);
export default SvgDotsThree;
