import React from 'react';

import Button from './components/button/Button';

function App() {
  return (
    <div>
      <Button children="Button label"/>

      <Button>
        Button label
      </Button>
    </div>
  );
}

export default App;
