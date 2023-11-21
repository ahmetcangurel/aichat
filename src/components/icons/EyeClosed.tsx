import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEyeClosed = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 25 24"
    {...props}>
    <Path
      fill={props.color || '#333'}
      fillRule="evenodd"
      d="M12.55 3c-2.25 0-4.2.6-5.85 1.8l1.2 1.05c1.35-.9 2.85-1.35 4.65-1.35 4.95 0 9 4.05 9 9h1.5C23.05 7.65 18.4 3 12.55 3M2.05 4.5l2.4 2.25c-1.5 1.8-2.4 4.2-2.4 6.75h1.5c0-2.25.75-4.2 2.1-5.7l3.3 3c-.6.75-.9 1.65-.9 2.7 0 2.55 1.95 4.5 4.5 4.5 1.2 0 2.25-.45 3-1.2l4.5 4.2 1.05-1.05-18-16.5L2.05 4.5ZM10 11.85l4.35 4.05c-.45.3-1.05.6-1.8.6-1.65 0-3-1.35-3-3 0-.6.15-1.2.45-1.65m7.05 2.4-1.5-1.35c-.3-1.2-1.35-2.25-2.7-2.4l-1.5-1.35C11.8 9 12.1 9 12.55 9c2.55 0 4.5 1.95 4.5 4.5v.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEyeClosed;
