/* 🌈 This is the client side 🌈*/

/* layout */
import DefaultLayout from '../components/layouts/DefaultLayout';

/* components */
import HeadlineModule from '../components/modules/HeadlineModule';
import Collage from '../components/modules/Collage/Collage.jsx';
import fetchUrl from '../fetchUrl';

/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */

const SlugPage = ({data}) => {
  const {content} = data;
  const headlineModuleData = content.body.find(
    item => item.component === 'Headline'
  );
  const collageData = content.body.find(item => item.component === 'Collage');
  /* Now you need to map your own components, I just left the headline module as reference */
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

/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */
SlugPage.getInitialProps = async ({query}) => {
  /* {query} is an object we receive within this method from Next,
	so that we can retrieve the slug (e.g. '/welcome') coming with the route */
  const {page} = query;
  /* Calling our internal api endpoint so that we can fetch Storyblok content
	server-side (we are on client-side here) */
  const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
  /* Returning the data back into SlugPage as props */
  return {data}; /* This is the same as { data: data } */
};

export default SlugPage;
