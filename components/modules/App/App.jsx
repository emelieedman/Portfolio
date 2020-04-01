import HeadlineModule from '../HeadlineModule/index';
import Collage from '../Collage/Collage';
import Project from '../Project/Project';

const App = ({headlineModuleData, collageData, projectData}) => {
  return (
    <div>
      <HeadlineModule
        title={headlineModuleData.title}
        subtitle={headlineModuleData.subtitle}
        button={headlineModuleData.button}
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
