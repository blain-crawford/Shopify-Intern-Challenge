import React, { useState } from 'react';
import { 
  StyledApiResponseContainer,
  StyledCard,
  StyledCardContent,
  StyledCardActions,
  StyledCardButton,
  StyledLyricList
} from '../components/mui-styles/apiResponseStyles'

const ApiResponses = ({suggestedLyrics}) => {
  return (
    <StyledApiResponseContainer>
        {suggestedLyrics.map((lyrics, lyricsIndex) => {
          return (
            <li key={lyricsIndex}>
              <StyledCard className='lyric-and-prompt-container'>
              <StyledCardContent>
                <p style={{borderBottom: '1px solid rgb(255,255,255,.6)'}}>
                  {lyrics.lyricPrompt}
                </p>
                <StyledLyricList>
                  {lyrics.lyrics.split('\n').map((sentence, sentenceIndex) => {
                    return (
                      <li
                        key={sentenceIndex}
                        style={{marginBottom: '5px'}}
                      >
                      {sentence}
                      </li>
                    )
                  })}
                </StyledLyricList>
              </StyledCardContent>
              <StyledCardActions>
                <StyledCardButton size="small">Edit</StyledCardButton>
                <StyledCardButton size="small">Delete</StyledCardButton>
              </StyledCardActions>
            </StyledCard>
          </li>
          )
        })}
    </StyledApiResponseContainer>
  );
};

export default ApiResponses;
