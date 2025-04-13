import React from 'react';

import Svg from '../../utils/Svg';

const CommonSvg = ({name}) => {
  const SvgComponent = Svg[name];
  return <SvgComponent />;
};

export default CommonSvg;
