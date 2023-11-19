import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgDislike = (props: SvgProps) => (
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
      d="M16.427 12.9 12.77 21a2.766 2.766 0 0 1-1.94-.79 2.678 2.678 0 0 1-.803-1.91v-3.6H4.85a1.853 1.853 0 0 1-1.401-.619 1.792 1.792 0 0 1-.428-1.45l1.262-8.1c.066-.43.287-.821.624-1.102A1.847 1.847 0 0 1 6.112 3h10.315m0 9.9V3m0 9.9h2.442c.518.01 1.02-.17 1.413-.501A2.07 2.07 0 0 0 21 11.1V4.8a2.07 2.07 0 0 0-.718-1.299 2.133 2.133 0 0 0-1.413-.5h-2.442"
    />
  </Svg>
);
export default SvgDislike;
