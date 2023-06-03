import MainLayout from '@my/components/MainContainer';
import WorkInProgress from '@my/components/WIP';

// const preferDarkSchema =
//    window.matchMedia &&
//    window.matchMedia('(prefers-color-scheme: dark)').matches;
// const defaultTheme = preferDarkSchema ? 'dark' : 'light';
export default function Home() {
   return (
      <MainLayout>
         {/* <main className="flex min-h-screen flex-col items-center justify-between px-5 dark:bg-bg-dark z-10"> */}
         <WorkInProgress />
         {/* </main> */}
      </MainLayout>
   );
}
