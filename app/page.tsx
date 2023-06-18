import Advert from '@my/components/Advert';
import MainLayout from '@my/components/MainContainer';
import NavbarContainer from '@my/components/NavbarContainer';
// import TestGSAP from '@my/components/Projects/Test';
import SectionContainer from '@my/components/SectionContainer';
import ScrollProvider from '@my/lib/ScrollProvider';
import About from './about/page';
import Skills from './skills/page';

export default function Home() {
   //   useEffect(() => {
   //      // loader handler
   //      const loader = document.querySelector('.loader');

   //      loader.addEventListener('animationend', () => {
   //         setLoader(false);
   //      });
   //   }, []);
   return (
      <ScrollProvider>
         <MainLayout>
            <NavbarContainer />
         </MainLayout>
         <SectionContainer isScrollSection>
            <Advert />
         </SectionContainer>
         <SectionContainer isScrollSection>
            <About />
         </SectionContainer>
         <SectionContainer isScrollSection>
            <Skills />
         </SectionContainer>
      </ScrollProvider>
   );
}
