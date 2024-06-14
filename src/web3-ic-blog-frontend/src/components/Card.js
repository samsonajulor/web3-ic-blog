import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { shortenAccount } from '../utils';

const Card = ({ id, title, content, image }) => {
  return (
    <Link to={`/post/${id}`}>
      <div className='max-w-xl rounded overflow-hidden shadow-lg mt-4 mb-4 mx-auto'>
        <div className='px-6 py-4'>
          <div className='font-bold text-2xl mb-2'>{shortenAccount(title)}</div>
          <p className='text-gray-700 text-lg'>{content.slice(0, 16)} {content.length > 16 ? '...' : ''}</p>
        </div>
        <Button text='read more' onClick={() => null} />
      </div>
    </Link>
  );
};

export default Card;
