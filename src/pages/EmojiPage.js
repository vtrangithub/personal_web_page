import React from 'react';
import EmojiGenerator from '../components/EmojiGenerator/EmojiGenerator';
import '../components/EmojiGenerator/EmojiPageStyle.css'

import { Emoji } from '../components/EmojiGenerator/Emoji';

const EmojiPage = () => {
  return (
    <>
      <div className='EmojiPageStyle'>
        <div >
          <h1 style={{textAlign: "center"}}>Emoji Generator (<Emoji symbol="
      😀"/>)</h1>
          <p style={{textAlign: "center"}}>Please enter a postive number which is less than 1500 in the box</p>
        </div>
        <div>
          <EmojiGenerator />
        </div>
      </div>


    </>
  );
};

export default EmojiPage;
