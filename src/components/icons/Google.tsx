import * as React from 'react';
import Svg, {Mask, Path, G} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgGoogle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Mask
      id="google_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path fill="#fff" d="M23.855 0H0v24h23.855V0" />
    </Mask>
    <G mask="url(#google_svg__a)">
      <Path
        fill="#4285F4"
        d="M23.855 12.276c0-.816-.067-1.636-.21-2.439H12.167v4.621h6.573a5.55 5.55 0 0 1-2.433 3.647v2.998h3.922c2.303-2.09 3.626-5.177 3.626-8.828"
      />
      <Path
        fill="#34A853"
        d="M12.167 24c3.282 0 6.05-1.063 8.066-2.897l-3.921-2.998c-1.091.732-2.5 1.146-4.14 1.146-3.175 0-5.867-2.112-6.833-4.952H1.292v3.091C3.358 21.443 7.566 24 12.167 24Z"
      />
      <Path
        fill="#FBBC04"
        d="M5.334 14.3a7.093 7.093 0 0 1 0-4.595V6.614H1.292a11.861 11.861 0 0 0 0 10.776l4.042-3.09"
      />
      <Path
        fill="#EA4335"
        d="M12.167 4.749a6.664 6.664 0 0 1 4.668 1.799l3.474-3.426A11.787 11.787 0 0 0 12.167 0C7.566 0 3.358 2.557 1.292 6.614l4.042 3.09c.962-2.843 3.658-4.955 6.833-4.955"
      />
    </G>
  </Svg>
);
export default SvgGoogle;
