import React from 'react';
import EmojiGenerator from '../components/EmojiGenerator/EmojiGenerator';
import '../components/EmojiGenerator/EmojiPageStyle.css'

import { Emoji } from '../components/EmojiGenerator/Emoji';

const EmojiPage = () => {
  return (
    <>
      <div>
        <div >
          <h1 className='rainbow-text'>Emoji Generator </h1>
          <div style={{ textAlign: "center" }}>
            (<Emoji symbol="😀" />)
          </div>
          <div>
          <p style={{ textAlign: "center" }}>Please enter a postive number which is less than 1500 in the box</p>
        </div>
          </div>
          
        <div>
          <EmojiGenerator />
        </div>
      </div>


    </>
  );
};

export default EmojiPage;