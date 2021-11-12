import { GetStaticProps } from 'next';
import SolutionPage from '../../src/pages/solution/Solution';
import { getPage } from '../../src/prismic';

const Stencil = (props) => <SolutionPage {...props} />;

export const getStaticProps: GetStaticProps = async (context) => {
  const announcementBarData = await getPage('announcement_bar');

  return {
    props: {
      announcement_bar: announcementBarData.data,
      solutionId: 'stencil',
    },
  };
};

export default Stencil;
