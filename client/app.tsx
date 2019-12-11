import * as React from 'react';

import Title from './packages/atoms/title/index';

const App: React.FC<any> = (props) => {
  return <Title title="This is my first SSR" />
}

export default App;