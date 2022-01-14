import { createContext, useContext } from 'solid-js';

export const PageContext = createContext({
  url: ''
});

const usePageContext = () => useContext(PageContext);

export default usePageContext;