import * as React from 'react';

import { testData } from './test.data';

import Card from 'client/packages/atoms/card/index'

import { ProductItemType } from 'client/types/card';

import './select-product.scss';

const blockName = 'select-product';

export default function SelectProduct(props: any): JSX.Element {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
  }

  const renderCard = (item: ProductItemType, index: number): React.ReactElement => {
    const { id } = item;

    return (
      <li key={id}>
        <Card
          onChange={onChange}
          {...item}
        />
      </li>
    )
  }

  return (
    <ul className={blockName}>
      { testData.map(renderCard) }
    </ul>
  );
}