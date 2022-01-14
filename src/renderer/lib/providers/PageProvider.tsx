import { Component } from 'solid-js';
import Header from '$/renderer/lib/components/Header';
import { PageContext } from '$/hooks/usePageContext';

interface PageProviderProps {
  Page: Component,
  pageProps: any,
}

const PageProvider = (P: PageProviderProps) => {
  return (
    <PageContext.Provider value={P}>
      <Header />
      <P.Page {...P.pageProps} />
    </PageContext.Provider>
  );
};

export default PageProvider;