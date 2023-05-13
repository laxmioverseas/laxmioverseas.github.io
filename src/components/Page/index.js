import {Header, Footer} from './../index';
import './styles.scss';

const Page = props => {
  const {children, pageName} = props;

  console.log(`Page loaded: ${pageName}`);
  return (
    <div className="container">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Page;
