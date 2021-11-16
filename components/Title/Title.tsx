import type {
  ReactElement,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';

import { Box, Container, Grid, Typography } from '@material-ui/core';
import clsx from 'classnames';

export interface TitleProps {
  title: ReactNode;
}

export function Title({ title }: TitleProps): ReactElement{
 
  return (
    <div className='title-box'>
      <svg className='title-text' width="100%" height="100%">
        <defs>
          <pattern id="polka-dots" x="0" y="0"                    width="100" height="100"
                  patternUnits="userSpaceOnUse">
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>  
            <style>
        @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
      </style>
          
        </defs>
                  
        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
        
        
      
    <text x="50%" y="60%"  text-anchor="middle"  >
    {title}
    </text>
    </svg>
    </div>
  );
}
