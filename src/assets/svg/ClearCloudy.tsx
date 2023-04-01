import * as React from 'react';
import Svg, { Defs, Image, Path, Pattern, Use } from 'react-native-svg';

const ClearCloudy = (props) => (
  <Svg
    width={128}
    height={128}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h128v128H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.00781)" />
      </Pattern>
      <Image
        id="b"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default ClearCloudy;