import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgUser = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke={props.color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 21V19.11a3.674 3.674 0 0 0-1.172-2.671A4.123 4.123 0 0 0 16 15.333H8c-1.06 0-2.078.398-2.828 1.107A3.675 3.675 0 0 0 4 19.11V21M12 11.556c2.21 0 4-1.692 4-3.778C16 5.69 14.21 4 12 4 9.791 4 8 5.691 8 7.778c0 2.086 1.791 3.778 4 3.778"
    />
  </Svg>
);
export default SvgUser;
