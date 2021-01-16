import React, { ReactElement } from 'react';
import DataProvider from 'providers/data';

const App = (): ReactElement => {
  return (
    <DataProvider>
      <div>hej</div>
    </DataProvider>
  );
};

export default App;
