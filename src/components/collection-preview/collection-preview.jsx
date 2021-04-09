import React from "react";
import { CollectionItem } from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'
interface Props {
  key: any;
  title: string;
  items: any;
}
export const CollectionPreview = ({ key, title, items }: Props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, imageUrl,name,price }) => (
            <CollectionItem key={id} id={id} imageUrl={imageUrl} name={name} price={price} />
          ))}
      </div>
    </div>
  );
};
