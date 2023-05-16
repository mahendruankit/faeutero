import React from 'react';
import './PointOfIntrestProduct.scss';
import Button from '../Common/Button/Button';

export default function PointOfIntrestProduct({
  items,
  onAddToCartClick,
  className,
}) {
  return (
    <div className={`${className}`}>
      {items.map((poip, key) => {
        return (
          <div className={`${className}__item`} key={key}>
            <div className={`${className}__item__image`}>
              <img src={poip.image} alt='Card product'></img>
            </div>
            <div className={`${className}__item__title`}>{poip.title}</div>
            <div className={`${className}__item__description`}>
              {poip.description}
            </div>
            <div className={`${className}__item__posting`}>
              {poip.ispostingincluded ? (
                <small>Posting included</small>
              ) : (
                <small>Digital download</small>
              )}
            </div>
            <div className={`${className}__item__price`}>£{poip.price}</div>
            <div className={`${className}__item__add`}>
              <Button
                label='Add'
                size='medium'
                onClick={() => onAddToCartClick(poip.id)}
                primary={true}
              ></Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
