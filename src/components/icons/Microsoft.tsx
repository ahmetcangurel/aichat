import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgMicrosoft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path fill="#F25022" d="M0 0h11.405v11.405H0z" />
    <Path fill="#7FBA00" d="M12.595 0H24v11.405H12.595V0" />
    <Path fill="#00A4EF" d="M0 12.595h11.405V24H0V12.595" />
    <Path fill="#FFB900" d="M12.595 12.595H24V24H12.595V12.595" />
  </Svg>
);
export default SvgMicrosoft;
