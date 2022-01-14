import '$/assets/style/background.css';

const Index = () => {
  return (
    <main class='bg-home h-screen bg-cover items-end <lg:pt-2/7 lg:(flex pb-1/10)'>
      <article class='<lg:text-center px-1/15'>
        <header class='container uppercase md:text-2xl'>
          <h5 class='text tracking-heading font-BarlowCondensed text-bluish-gray'>so, you want to travel to</h5>
          <h1 class='text-[6em] py-6 font-Bellefair'>space</h1>
        </header>
        <p class='font-Barlow text-bluish-gray @md:px-1/5 lg:pr-2/5'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </article>
      <div class='<lg:absolute left-0 bottom-16 w-screen flex justify-center'>
        <div class='h-40 w-40 lg:(h-50 w-50) flex items-center justify-center relative group'>
          <div class='absolute h-8/5 w-8/5 bg-[#979797] bg-opacity-70 rounded-full transform transition-transform scale-0 group-hover:(scale-100)' />
          <button
            class='h-full w-full rounded-full bg-white text-very-dark text-xl uppercase font-Bellefair absolute'>
            explore
          </button>
        </div>
      </div>
    </main>
  );
};

export default Index;