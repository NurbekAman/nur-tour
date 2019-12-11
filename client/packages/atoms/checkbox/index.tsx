import * as React from 'react';

interface CheckboxType {
  onChange: (id: number) => void,
  id: number,
}

export default function Checkbox(props: CheckboxType): JSX.Element {
  const { onChange, id } = props;
  const onSelect = () => {
    onChange(id);
  }

  return (
    <input
      type="checkbox"
      onChange={onSelect}
    />
  )
}