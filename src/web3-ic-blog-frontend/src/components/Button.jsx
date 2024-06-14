import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className={`bg-brown-600 hover:bg-brown-800 text-beige-200 font-serif font-bold py-2 px-4 rounded-md border-2 border-brown-600`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
