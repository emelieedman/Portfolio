import DefaultLayout from '../components/layouts/DefaultLayout';
import App from '../components/modules/App/App';
import fetchUrl from '../fetchUrl';

const IndexPage = ({data}) => {
  const {content} = data;
  const headlineModuleData = content.body.find(
    item => item.component === 'Headline'
  );
  const collageData = content.body.find(item => item.component === 'Collage');
  const postImgRightData = content.body.find(
    item => item.component === 'PostImgRight'
  );

  return (
    <DefaultLayout>
      {headlineModuleData && collageData && postImgRightData ? (
        <App
          headlineModuleData={headlineModuleData}
          collageData={collageData}
          postImgRightData={postImgRightData}
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
