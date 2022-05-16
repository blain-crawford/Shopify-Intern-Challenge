import React, { useState } from 'react';
import PageHeader from './PageHeader';
import SongGenerator from './SongGeneratorForm';
import ApiResponses from './ApiResponses';

const App = () => {
  return (
    <div>
      <PageHeader />
      <SongGenerator />
      <ApiResponses />
      <h1>Hello, Shopify!</h1>
    </div>
  );
};

export default App;
