import { createSignal, For} from 'solid-js';
import usePageContext from '$/hooks/usePageContext';

const list = [
  { url: '/', name: 'home' },
  { url: '/destination', name: 'destination' },
  { url: '/crew', name: 'crew' },
  { url: '/technology', name: 'technology' }
];

const Header = () => {
  const { url } = usePageContext();
  const [open, setOpen] = createSignal(false);


  return (
    <header class='flex items-center fixed md:top-8 left-0 w-full'>
      <div class='w-full pl-14 <md:pt-8'>
        <img src="/images/shared/logo.svg" alt="logo"/>
      </div>
      <img
        class='md:hidden fixed top-11 right-11 z-100 cursor-pointer'
        onClick={() => setOpen(v => !v)}
        src={open() ? '/images/shared/icon-close.svg' : "/images/shared/icon-hamburger.svg"}
        alt="hamburer or close"
      />
      <nav
        class={`flex pl-8  backdrop-filter backdrop-blur-xl gap-12 tracking-nav relative bg-white bg-opacity-4 relative transform transition-transform font-BarlowCondensed
          before before:(absolute )
          <md:(absolute top-0 right-0 flex-col h-screen pt-32)
          ${open() ? '<md:translate-x-0' : '<md:translate-x-full'}
          md:px-30
          lg:pr-40`}
      >
        <hr class='hidden xl:block w-120 absolute top-1/2 -left-8/17'/>
        <For each={list}>{(point, i) => {
          return (
            <a
              href={point.url}
              classList={{
                '<md:border-r-3 md:border-b-3': url == point.url,
              }}
              class='<md:pr-40 md:(py-10 h-24) space-x-3 border-white uppercase cursor-pointer'
            >
              <span class='@md:hidden font-bold'>0{i()}</span>
              <span>{point.name}</span>
            </a>
          )
        }}</For>
      </nav>
    </header>
  );
};

export default Header;