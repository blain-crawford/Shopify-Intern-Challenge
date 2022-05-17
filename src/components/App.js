import React, { useState } from 'react';
import PageHeader from './PageHeader';
import SongGenerator from './SongGeneratorForm';
import ApiResponses from './ApiResponses';
import { StyledApp } from './mui-styles/appStyles';
import axios from 'axios';
import useLocalStorage from 'react-use-localstorage';

const App = () => {
  const [storedIdeas, setStoredIdeas] = useLocalStorage('storedIdeas');
  const [lyricsTheme, setLyricsTheme] = useState('');
  const [suggestedLyrics, setSuggestedLyrics] = useState(JSON.parse(localStorage.storedIdeas));
  const [searchStatus, setSearchStatus] = useState(true);

  let testRequest = {
    prompt: `Write a song about ${lyricsTheme}`,
    temperature: 1,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: -2.0,
  };

  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.REQUEST_KEY}`,
    },
    data: testRequest,
    url: 'https://api.openai.com/v1/engines/text-curie-001/completions',
  };

  const checkForStoredIdeas = (() => {
    if(!localStorage.storedIdeas){
      setStoredIdeas('[]');
    } 
  })()

  const findLyricSuggestions = (theme) => {
    let newTheme = theme;
    setLyricsTheme(newTheme);
  };

  const sendLyricRequest = () => {
    console.log(process.env.REQUEST_KEY);
    axios(options)
      .then(function (response) {
        // handle success
        setSuggestedLyrics([
          {
            lyrics: response.data.choices[0].text,
            lyricPrompt: lyricsTheme,
          },
          ...suggestedLyrics,
        ]);

        setStoredIdeas(`${JSON.stringify([
          {
            lyrics: response.data.choices[0].text,
            lyricPrompt: lyricsTheme,
          },
          ...suggestedLyrics,
        ])}`);
        setLyricsTheme('');
        setSearchStatus(true);
      })
      .catch(function (error) {
        // handle error
        setSearchStatus(false);
      });
  };

  return (
    <div>
      <StyledApp>
        <PageHeader />
        <SongGenerator
          theme={lyricsTheme}
          findLyricSuggestions={findLyricSuggestions}
          sendLyricRequest={sendLyricRequest}
          searchStatus={searchStatus}
        />
        <ApiResponses 
          suggestedLyrics={suggestedLyrics}
        />
      </StyledApp>
    </div>
  );
};

export default App;
