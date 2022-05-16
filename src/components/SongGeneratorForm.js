import React, { useState } from 'react';
import {
  StyledForm,
  StyledInstructions,
  StyledInstructionsHeader,
  StyledInstructionsBody,
  StyledThemeInput,
  StyledThemeInputLabel,
  StyledThemeHelperText,
  StyledFormContainer,
  StyledSearchButton,
} from './mui-styles/SongGeneratorFormStyles';

const SongGenerator = ({
  theme,
  findLyricSuggestions,
  sendLyricRequest,
  searchStatus,
}) => {
  return (
    <StyledFormContainer>
      <StyledInstructions>
        <StyledInstructionsHeader id='instructions-header'>
          <h2 style={{ margin: '10px' }}>
            Feeling the sting of writer's block?
          </h2>
        </StyledInstructionsHeader>
        <StyledInstructionsBody id='instructions'>
          <h3>
            Enter the theme to any songs you are currently writing below and get
            some lyric suggestions! Like what you're seeing? Further edit and
            work with the suggested lyrics on the interactive cards below!
          </h3>
        </StyledInstructionsBody>
      </StyledInstructions>
      <StyledForm variant='standard'>
        <StyledThemeInputLabel htmlFor='theme-input'>
          Theme
        </StyledThemeInputLabel>
        <StyledThemeInput
          id='theme-input'
          value={theme}
          onChange={(e) => {
            findLyricSuggestions(e.target.value);
          }}
          aria-describedby='theme-helper-text'
        ></StyledThemeInput>
        <StyledThemeHelperText id='theme-helper-text'>
          `Enter Lyric Theme Here $
          {searchStatus ? (
            <></>
          ) : (
            <p style={{ color: 'blue' }}>** Please Try a different Search</p>
          )}
          `
        </StyledThemeHelperText>
        <StyledSearchButton id='theme-search-button' onClick={sendLyricRequest}>
          Get Lyrics
        </StyledSearchButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default SongGenerator;
