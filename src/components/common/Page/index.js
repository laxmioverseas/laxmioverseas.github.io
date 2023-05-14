import {Header, Footer} from './../../index';
import './styles.scss';

const Page = props => {
  const {children, pageName} = props;

  console.log(`Page loaded: ${pageName}`);
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Page;
