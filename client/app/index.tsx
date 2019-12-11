import * as React from 'react';

import Header from 'client/packages/atoms/header/index';
import ProductSelect from 'client/packages/organism/select-product/index';

import './app.scss';

const Index: React.FC<any> = (props) => {
  console.log(props)
  return (
    <div>
      <Header title="This is my first SSR" />
      <ProductSelect />
    </div>
  )
}

export default Index;