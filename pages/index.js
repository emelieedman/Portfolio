import DefaultLayout from '../components/layouts/DefaultLayout';
import App from '../components/modules/App/App';
import fetchUrl from '../fetchUrl';

const IndexPage = ({data}) => {
  const {content} = data;
  const headlineModuleData = content.body.find(
    item => item.component === 'Headline'
  );
  const collageData = content.body.find(item => item.component === 'Collage');
  const projectData = content.body.find(item => item.component === 'Project');
  console.log(projectData);

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
