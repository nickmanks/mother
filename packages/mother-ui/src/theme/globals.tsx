import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
    fontFaceLight,
    fontFaceMedium,
    fontFaceRegular,
    fontFaceSemiBold,
    fontFaceBold,
    fontEmbed,
} from './fonts';

const GlobalStyles = () => (
    <Helmet>
        <style type={'text/css'}>{`
        @import url('${fontEmbed}');

        ${fontFaceLight}
        ${fontFaceRegular}
        ${fontFaceMedium}
        ${fontFaceSemiBold}
        ${fontFaceBold}
    
        body {
          font-family: 'Euclid', 'Inter', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue ', sans-serif;
        }

        *::selection {
          background: #a057ff59;
        }
      `}</style>
    </Helmet>
);

export default GlobalStyles;
