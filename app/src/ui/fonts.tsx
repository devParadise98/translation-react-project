import { css } from 'styled-components';
import latoRegularEot from '../assets/fonts/Lato/Lato-Regular.eot';
import latoRegularTtf from '../assets/fonts/Lato/Lato-Regular.ttf';
import latoRegularWoff from '../assets/fonts/Lato/Lato-Regular.woff';
import latoRegularWoff2 from '../assets/fonts/Lato/Lato-Regular.woff2';
import latoBlackEot from '../assets/fonts/Lato/Lato-Black.eot';
import latoBlackTtf from '../assets/fonts/Lato/Lato-Black.ttf';
import latoBlackWoff from '../assets/fonts/Lato/Lato-Black.woff';
import latoBlackWoff2 from '../assets/fonts/Lato/Lato-Black.woff2';
import latoBoldEot from '../assets/fonts/Lato/Lato-Bold.eot';
import latoBoldTtf from '../assets/fonts/Lato/Lato-Bold.ttf';
import latoBoldWoff from '../assets/fonts/Lato/Lato-Bold.woff';
import latoBoldWoff2 from '../assets/fonts/Lato/Lato-Bold.woff2';
import latoLightEot from '../assets/fonts/Lato/Lato-Light.eot';
import latoLightTtf from '../assets/fonts/Lato/Lato-Light.ttf';
import latoLightWoff from '../assets/fonts/Lato/Lato-Light.woff';
import latoLightWoff2 from '../assets/fonts/Lato/Lato-Light.woff2';
import latoThinEot from '../assets/fonts/Lato/Lato-Thin.eot';
import latoThinTtf from '../assets/fonts/Lato/Lato-Thin.ttf';
import latoThinWoff from '../assets/fonts/Lato/Lato-Thin.woff';
import latoThinWoff2 from '../assets/fonts/Lato/Lato-Thin.woff2';

export const styledFonts = css`
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 100;
  font-display: block;
  src: url(${latoThinEot});
  src: url(${latoThinEot}?#iefix) format('embedded-opentype'),
    url(${latoThinWoff2}) format('woff2'),
    url(${latoThinWoff}) format('woff'),
    url(${latoThinTtf}) format('truetype');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-display: block; 
  src: url(${latoLightEot});
  src: url(${latoLightEot}?#iefix) format('embedded-opentype'),
    url(${latoLightWoff2}) format('woff2'),
    url(${latoLightWoff}) format('woff'),
    url(${latoLightTtf}) format('truetype');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: block; 
  src: url(${latoRegularEot});
  src: url(${latoRegularEot}?#iefix) format('embedded-opentype'),
    url(${latoRegularWoff2}) format('woff2'),
    url(${latoRegularWoff}) format('woff'),
    url(${latoRegularTtf}) format('truetype');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: block; 
  src: url(${latoBoldEot});
  src: url(${latoBoldEot}?#iefix) format('embedded-opentype'),
    url(${latoBoldWoff2}) format('woff2'),
    url(${latoBoldWoff}) format('woff'),
    url(${latoBoldTtf}) format('truetype');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url(${latoBlackEot});
  src: url(${latoBlackEot}?#iefix) format('embedded-opentype'),
    url(${latoBlackWoff2}) format('woff2'),
    url(${latoBlackWoff}) format('woff'),
    url(${latoBlackTtf}) format('truetype');
}
`;
