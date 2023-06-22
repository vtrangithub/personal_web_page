import React from 'react';
import EmojiGenerator from '../components/EmojiGenerator/EmojiGenerator';
import EmojiPageStyle from '../components/EmojiGenerator/EmojiPageStyle.css'



const EmojiPage = () => {
  return (
    <>
      <div className='EmojiPageStyle'>
        <div >
          <h1>Emoji Generator</h1>
          <p>Please enter a postive number which is less than 1500 in the box</p>
        </div>
        <div>
          <EmojiGenerator />
        </div>
      </div>


    </>
  );
};

export default EmojiPage;
