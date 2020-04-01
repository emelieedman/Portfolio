/* styles */
import React, {useState} from 'react';
import styles from './index.scss';

const titleColors = [
  {
    background:
      'linear-gradient(to right, #000000 335px, #FFFFFF 335px, #FFFFFF 990px, #000000 990px)',
    ['-webkit-text-fill-color']: 'transparent',
    ['-webkit-background-clip']: 'text'
  },
  {
    background:
      'linear-gradient(to right, #000000 335px, #BBFFF2 335px, #BBFFF2 990px, #000000 990px)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text'
  },
  {
    background:
      'linear-gradient(to right, #000000 335px, #FFFDCD 335px, #FFFDCD 990px, #000000 990px)',
    ['-webkit-text-fill-color']: 'transparent',
    ['-webkit-background-clip']: 'text'
  },
  {
    background:
      'linear-gradient(to right, #000000 335px, #FFD0EF 335px, #FFD0EF 990px, #000000 990px)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text'
  },
  {
    background:
      'linear-gradient(to right, #000000 335px, #D3F5FF 335px, #D3F5FF 990px, #000000 990px)',
    ['-webkit-text-fill-color']: 'transparent',
    ['-webkit-background-clip']: 'text'
  },
  {
    background:
      'linear-gradient(to right, #000000 335px, #FFFFFF 335px, #FFFFFF 990px, #000000 990px)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text'
  }
  // {
  //   background:
  //     'linear-gradient(to right, #000000 335px, #FF9A9A 335px, #FF9A9A 990px, #000000 990px)',
  //   ['-webkit-text-fill-color']: 'transparent',
  //   ['-webkit-background-clip']: 'text'
  // }
];

const backgroundColors = [
  {backgroundColor: '#9ABCFF', color: '#FFFFFF'},
  {backgroundColor: '#FFCBCB', color: '#BBFFF2'},
  {backgroundColor: '#FFD0EF', color: '#FFFDCD'},
  {backgroundColor: '#68DEC2', color: '#FFD0EF'},
  {backgroundColor: '#EABBFF', color: '#D3F5FF'},
  {backgroundColor: '#ECFFB6', color: '#FFFFFF'}
];

const boxColor = {
  backgroundColor: '#FF9A9A'
};

const boxColor2 = {
  backgroundColor: '#D1B5DB'
};

const buttonColor = {
  backgroundColor: '#FF9A9A',
  color: '#CD83DF'
};

const buttonColor2 = {
  backgroundColor: '#D1B5DB',
  color: '#BAFFF7'
};

const HeadlineModule = ({title, subtitle, button}) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  const color = titleColors[colorIndex];
  const backgroundColor = backgroundColors[backgroundColorIndex];

  function changeColor() {
    // if (colorIndex < titleColors.length - 1) {
    //   setColorIndex(colorIndex + 1);
    // } else {
    //   setColorIndex(0);
    // }
    setColorIndex((colorIndex + 1) % titleColors.length);
  }

  function changeBackgroundColor() {
    setBackgroundColorIndex(
      (backgroundColorIndex + 1) % backgroundColors.length
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.box} style={backgroundColor}></div>
      <h1 className={styles.title} style={color}>
        {title}
      </h1>
      <h2 className={styles.subtitle} style={color}>
        {subtitle}
      </h2>
      <button
        className={styles.button}
        style={backgroundColor}
        onClick={() => {
          changeColor();
          changeBackgroundColor();
        }}
      >
        {button}
      </button>
    </div>
  );
};

export default HeadlineModule;
