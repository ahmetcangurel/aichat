import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgContrast = (props: SvgProps) => (
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
      d="M12 16.546a4.546 4.546 0 1 0 0-9.092 4.546 4.546 0 0 0 0 9.092M12 2v1.818M12 20.182V22M4.927 4.927l1.291 1.291M17.782 17.782l1.29 1.29M2 12h1.818M20.182 12H22M4.927 19.073l1.291-1.291M17.782 6.218l1.29-1.29"
    />
  </Svg>
);
export default SvgContrast;
