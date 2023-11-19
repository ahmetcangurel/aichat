import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgLimitations = (props: SvgProps) => (
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
      d="M10.527 4.85 3.231 17.35a1.803 1.803 0 0 0-.005 1.759c.149.268.364.491.623.648.26.157.554.24.855.244h14.592c.3-.003.596-.087.855-.244.26-.157.474-.38.623-.648a1.804 1.804 0 0 0-.005-1.76L13.473 4.852a1.744 1.744 0 0 0-.628-.624 1.689 1.689 0 0 0-1.69 0 1.744 1.744 0 0 0-.628.624M12 9.394v3.535M12 16.465h.01"
    />
  </Svg>
);
export default SvgLimitations;
