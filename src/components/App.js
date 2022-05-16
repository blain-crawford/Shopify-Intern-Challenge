import React, { useState } from 'react';
import PageHeader from './PageHeader';
import SongGenerator from './SongGeneratorForm';
import ApiResponses from './ApiResponses';
import { StyledApp } from './mui styles/appStyles';

const App = () => {
  return (
    <StyledApp>
      <PageHeader />
      <SongGenerator />
      <ApiResponses />
      <h1>Hello, Shopify!</h1>
    </StyledApp>
  );
};

export default App;
