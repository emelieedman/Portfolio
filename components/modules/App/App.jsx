import HeadlineModule from '../HeadlineModule/index';
import Collage from '../Collage/Collage';
import Project from '../Project/Project';
import {useState} from 'react';
import {titleColors, backgroundColors, singleColors} from './colors';

const App = ({headlineModuleData, collageData, projectData}) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [singleColorIndex, setSingleColorIndex] = useState(0);

  const color = titleColors[colorIndex];
  const backgroundColor = backgroundColors[backgroundColorIndex];
  const singleColor = singleColors[singleColorIndex];

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

  function changeSingleColor() {
    setSingleColorIndex((singleColorIndex + 1) % singleColors.length);
  }

  console.log(projectData);

  return (
    <div>
      <HeadlineModule
        title={headlineModuleData.title}
        subtitle={headlineModuleData.subtitle}
        button={headlineModuleData.button}
        changeBackgroundColor={changeBackgroundColor}
        changeColor={changeColor}
        changeSingleColor={changeSingleColor}
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
        changeSingleColor={changeSingleColor}
        singleColor={singleColor}
        backgroundColor={backgroundColor}
      />

      <Project
        title={projectData.Title}
        subtitle={projectData.subtitle}
        paragraph={projectData.Paragraph}
        image={projectData.Image}
        subtitle2={projectData.subtitle2}
        paragraph2={projectData.paragraph2}
        image2={projectData.image2}
        subtitle3={projectData.subtitle3}
        paragraph3={projectData.paragraph3}
        image3={projectData.image3}
        subtitle4={projectData.subtitle4}
        paragraph4={projectData.paragraph4}
        image4={projectData.image4}
      />
    </div>
  );
};

export default App;
