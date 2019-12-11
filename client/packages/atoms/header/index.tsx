import * as React from 'react';

import Title from '../title/index';

import './header.scss';

const blockName = 'header';

export default function Header(props: any): JSX.Element {
  return (
    <div className={blockName}>
      <Title
        title="hello"
        extraClassName={`${blockName}__title`}
      />
    </div>
  )
}