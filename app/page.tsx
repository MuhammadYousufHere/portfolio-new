import MainLayout from '@my/components/MainContainer';
import WorkInProgress from '@my/components/WIP';

// const preferDarkSchema =
//    window.matchMedia &&
//    window.matchMedia('(prefers-color-scheme: dark)').matches;
// const defaultTheme = preferDarkSchema ? 'dark' : 'light';
export default function Home() {
   return (
      <MainLayout>
         <WorkInProgress />
      </MainLayout>
   );
}
