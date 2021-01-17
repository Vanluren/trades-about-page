import React, { ReactElement } from 'react';
import DataProvider from 'providers/data';
import AboutUs from 'components/views/AboutUs';

const App = (): ReactElement => {
  return (
    <DataProvider>
      <AboutUs />
    </DataProvider>
  );
};

export default App;
