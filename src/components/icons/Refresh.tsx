import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgRefresh = (props: SvgProps) => (
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
      d="M3 5.776v4.67h4.67M20.121 18.228v-4.67h-4.67"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.168 9.668A7.004 7.004 0 0 0 6.611 7.053L3 10.446m17.121 3.113-3.61 3.393a7.004 7.004 0 0 1-11.558-2.615"
    />
  </Svg>
);
export default SvgRefresh;
