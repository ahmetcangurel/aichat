import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgTrash = (props: SvgProps) => (
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
      d="M4 6.6h16M18.222 6.6v12.6c0 .477-.187.935-.52 1.273a1.767 1.767 0 0 1-1.258.527H7.556c-.472 0-.924-.19-1.258-.527a1.812 1.812 0 0 1-.52-1.273V6.6m2.666 0V4.8c0-.477.188-.935.521-1.273A1.767 1.767 0 0 1 10.222 3h3.556c.471 0 .923.19 1.257.527.333.338.52.796.52 1.273v1.8M10.222 11.1v5.4M13.778 11.1v5.4"
    />
  </Svg>
);
export default SvgTrash;
