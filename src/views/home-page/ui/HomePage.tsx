import { ThemeSwitcher } from '@/shared/ui';

const HomePage = () => {
  return (
    <main className='grid-container'>
      <h1 className='col-span-full text-center'>Home page</h1>
      <div className='col-span-2 flex items-center gap-2'>
        <span>Change theme:</span>
        <ThemeSwitcher />
      </div>
    </main>
  );
};

export default HomePage;
