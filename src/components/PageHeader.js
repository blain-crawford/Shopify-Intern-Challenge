import React, { useState } from 'react';
import { 
  StyledHeader,
  StyledHeaderText 
} from './mui styles/pageHeaderStyle';
import LyricsOutlinedIcon from '@mui/icons-material/LyricsOutlined';

const PageHeader = () => {

  return (
    <StyledHeader>
      <StyledHeaderText>
        <LyricsOutlinedIcon style={{fontSize: '60px'}} />
        <h1 style={{fontSize: '50px'}}>LyricGenerator</h1>
        <LyricsOutlinedIcon style={{fontSize: '60px', marginLeft: '10px'}} />
      </StyledHeaderText>
    </StyledHeader>
  )
}

export default PageHeader;