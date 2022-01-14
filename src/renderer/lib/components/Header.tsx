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
    <header class='flex items-center fixed lg:top-10 left-0 w-full'>
      <div class='w-full pl-14 <lg:pt-10'>
        <img src="/images/shared/logo.svg" alt="logo"/>
      </div>
      <img
        class='lg:hidden fixed top-13 right-12 z-100 cursor-pointer'
        onClick={() => setOpen(v => !v)}
        src={open() ? '/images/shared/icon-close.svg' : "/images/shared/icon-hamburger.svg"}
        alt="hamburer or close"
      />
      <nav
        class={`flex pl-8  backdrop-filter backdrop-blur-xl gap-12 tracking-nav relative bg-white bg-opacity-4 relative transform transition-transform
          before before:(absolute )
          <lg:(absolute top-0 right-0 flex-col h-screen pt-32)
          ${open() ? '<lg:translate-x-0' : '<lg:translate-x-full'}
          lg:px-30
          xl:pr-40`}
      >
        <hr class='hidden xl:block w-120 absolute top-1/2 -left-8/17'/>
        <For each={list}>{(point, i) => {
          return (
            <a
              href={point.url}
              classList={{
                '<lg:border-r-3 lg:border-b-3': url == point.url,
              }}
              class='<lg:pr-40 lg:(py-10 h-24) space-x-3 border-white uppercase cursor-pointer'
            >
              <span class='@lg:hidden font-bold'>0{i()}</span>
              <span>{point.name}</span>
            </a>
          )
        }}</For>
      </nav>
    </header>
  );
};

export default Header;