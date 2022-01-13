import { hydrate, render } from 'solid-js/web'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import 'virtual:windi.css';
import 'virtual:windi-devtools';


let dispose: () => void

useClientRouter({
  render(pageContext) {
    const content = document.getElementById('page-view')
    const { Page, pageProps } = pageContext

    // Dispose to prevent duplicate pages when navigating.
    if (dispose) dispose()

    // Render the page
    if (pageContext.isHydration) {
      // This is the first page rendering; the page has been rendered to HTML
      // and we now make it interactive.
      dispose = hydrate(
        () => (
          <Page {...pageProps} />
        ),
        content!,
      )
    } else {
      // Render new page
      render(
        () => (
          <Page {...pageProps} />
        ),
        content!,
      )
    }
  },
})
