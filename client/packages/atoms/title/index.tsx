import * as React from 'react';
import sn from 'classnames';

import './title.scss';

interface TitleProps {
  title: string,
  extraClassName: string,
};

const blockName = 'title';

export default function Title(props: TitleProps): JSX.Element {
  const { title, extraClassName } = props;

  return (
    <h1 className={sn(blockName, extraClassName)}>
      hello
    </h1>
  );
}