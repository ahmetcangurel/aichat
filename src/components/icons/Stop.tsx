import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgStop = (props: SvgProps) => (
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
      d="M18.477 4.875H5.523a.648.648 0 0 0-.648.648v12.954c0 .358.29.648.648.648h12.954c.358 0 .648-.29.648-.648V5.523a.648.648 0 0 0-.648-.648"
    />
  </Svg>
);
export default SvgStop;
