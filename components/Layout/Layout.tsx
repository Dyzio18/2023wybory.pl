import { Footer, Header } from '@/components';
import '../../app/globals.css';

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      <div className='app-container'>
        {children}
      </div>
      <Footer />
    </>
  );
};
