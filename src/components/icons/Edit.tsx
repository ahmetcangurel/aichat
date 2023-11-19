import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEdit = (props: SvgProps) => (
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
      d="M11.105 4.91H4.801A1.801 1.801 0 0 0 3 6.713V19.32a1.801 1.801 0 0 0 1.801 1.801H17.41a1.801 1.801 0 0 0 1.8-1.8v-6.305"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.86 3.56a1.91 1.91 0 1 1 2.702 2.701l-8.556 8.556-3.602.9.9-3.602L17.86 3.56Z"
    />
  </Svg>
);
export default SvgEdit;
