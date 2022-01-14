import solidPlugin from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'
import WindiCSS from 'vite-plugin-windicss';
import tsconfigPaths from 'vite-tsconfig-paths';
import { UserConfig } from 'vite'

export default {
  plugins: [
    solidPlugin({ ssr: true }),
    ssr(),
    WindiCSS(),
    tsconfigPaths(),
  ],
  build: {
    polyfillDynamicImport: false,
  }
} as UserConfig
