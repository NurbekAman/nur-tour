import * as React from 'react';

import './title.scss';

interface TitleProps {
  title: string,
};

const blockName = 'title';

export default function Title(props: TitleProps): JSX.Element {
  return (
    <h1 className={blockName}>
      hello
    </h1>
  );
}