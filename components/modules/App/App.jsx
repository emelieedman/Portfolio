import HeadlineModule from '../HeadlineModule/index';
import Collage from '../Collage/Collage';
import Project from '../Project/Project';
import {useState} from 'react';
import {titleColors, backgroundColors} from './colors';

const App = ({headlineModuleData, collageData, projectData}) => {
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
    <div>
      <HeadlineModule
        title={headlineModuleData.title}
        subtitle={headlineModuleData.subtitle}
        button={headlineModuleData.button}
        changeBackgroundColor={changeBackgroundColor}
        changeColor={changeColor}
        backgroundColor={backgroundColor}
        color={color}
      />

      <Collage
        title={collageData.title}
        project={collageData.project}
        project2={collageData.project2}
        project3={collageData.project3}
        project4={collageData.project4}
        project5={collageData.project5}
      />

      <Project
        title={projectData.title}
        paragraph={projectData.paragraph}
        image={projectData.image}
      />
    </div>
  );
};

export default App;
