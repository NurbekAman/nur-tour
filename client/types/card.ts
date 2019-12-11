import * as React from "react";

export interface ProductItemType {
  id: number,
  title: string,
  price: title,
  src: string,
};

export interface CardType extends ProductItemType {
  onChange: (id: number) => void,
};