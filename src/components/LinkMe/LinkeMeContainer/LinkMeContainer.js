import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './LinkMeContainer.scss';

export default function LinkMeContainer({ link }) {
  return (
    <a href={link.url} target='_blank' rel='noreferrer'>
      <li className='linkMe__items__item__container'>
        <div className='linkMe__items__item'>
          <img
            src={link.source}
            alt='sourceIcon'
            className='linkMe__items__item__image'
          ></img>
          <div className='linkMe__items__item__title'>{link.title}</div>
          <div className='linkMe__items__item__caret'>
            <FontAwesomeIcon icon={faCaretRight} size='1x' />
          </div>
        </div>
      </li>
    </a>
  );
}
