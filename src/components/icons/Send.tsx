import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSend = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill={props.color || '#000'}
      d="M19.448 12.894a1 1 0 0 0 0-1.788l-14-7A1 1 0 0 0 4.04 5.275l1.43 5A1 1 0 0 0 6.43 11h4.571a1 1 0 0 1 0 2h-4.57a1 1 0 0 0-.963.725l-1.428 5a1 1 0 0 0 1.408 1.17l14-7v-.001"
    />
  </Svg>
);
export default SvgSend;
