import fetchUrl from '../fetchUrl';
import DefaultLayout from '../components/layouts/DefaultLayout';

import HeadlineModule from '../components/modules/HeadlineModule';
import Collage from '../components/modules/Collage/Collage.jsx';

const IndexPage = ({data}) => {
  const {content} = data;
  const headlineModuleData = content.body.find(
    item => item.component === 'Headline'
  );
  const collageData = content.body.find(item => item.component === 'Collage');

  return (
    <DefaultLayout>
      {headlineModuleData ? (
        <HeadlineModule
          title={headlineModuleData.title}
          subtitle={headlineModuleData.subtitle}
          button={headlineModuleData.button}
        />
      ) : null}
      {collageData ? (
        <Collage
          title={collageData.title}
          project={collageData.project}
          project2={collageData.project2}
          project3={collageData.project3}
          project4={collageData.project4}
          project5={collageData.project5}
        />
      ) : null}
    </DefaultLayout>
  );
};

IndexPage.getInitialProps = async () => {
  const data = await fetchUrl(`http://localhost:3000/api/page/welcome`);

  return {data};
};

export default IndexPage;
