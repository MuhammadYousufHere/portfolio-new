import MainHeading from '@my/common/MainHeading';
import Advert from '@my/components/Advert';
import MainLayout from '@my/components/MainContainer';
import SectionContainer from '@my/components/SectionContainer';
// import WorkInProgress from '@my/components/WIP';
import ScrollProvider from '@my/lib/ScrollProvider';
import About from './about/page';
import Skills from './skills/page';

export default function Home() {
   return (
      <ScrollProvider>
         <MainLayout>
            {/* <Intro /> */}
            {/* <AnimatedTextWord text="Hi Iam Here" /> */}
            <MainHeading />
         </MainLayout>
         <SectionContainer>
            <Advert />
         </SectionContainer>
         <SectionContainer>
            <About />
         </SectionContainer>
         <SectionContainer>
            <Skills />
         </SectionContainer>
      </ScrollProvider>
   );
}
