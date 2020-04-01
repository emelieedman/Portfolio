import fetchUrl from '../fetchUrl';
import DefaultLayout from '../components/layouts/DefaultLayout';
import App from '../components/modules/App/App';

import HeadlineModule from '../components/modules/HeadlineModule';
import Collage from '../components/modules/Collage/Collage.jsx';
import Project from '../components/modules/Project/Project';

const IndexPage = ({data}) => {
  const {content} = data;
  const headlineModuleData = content.body.find(
    item => item.component === 'Headline'
  );
  const collageData = content.body.find(item => item.component === 'Collage');
  const projectData = content.body.find(item => item.component === 'Project');

  return (
    <DefaultLayout>
      {headlineModuleData && collageData && projectData ? (
        <App
          headlineModuleData={headlineModuleData}
          collageData={collageData}
          projectData={projectData}
        />
      ) : null}
    </DefaultLayout>
  );
};

IndexPage.getInitialProps = async () => {
  const data = await fetchUrl(`http://localhost:3000/api/page/home`);

  return {data};
};

export default IndexPage;
