import * as React from 'react';

import { CardType } from 'client/types/card';

import Checkbox from 'client/packages/atoms/checkbox/index';

import './card.scss';

const blockName = 'card';

export default function Card(props: CardType): JSX.Element {
  const { onChange, id, title, src } = props;

  return (
    <div className={blockName}>
      <div className={`${blockName}__checkbox`}>
        <Checkbox
          onChange={onChange}
          id={id}
        />
      </div>
      <div className={`${blockName}__image-container`}>
        <img
          src={src}
          alt={title}
          className={`${blockName}__image`}
        />
      </div>
    </div>
  )
}