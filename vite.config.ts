import { defineConfig } from 'vite';

const html = (
  strings: readonly string[] | ArrayLike<string>,
  ...values: Array<any>
) => String.raw({ raw: strings }, ...values);

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
    },
  },
  define: {
    html: html.toString(),
  },
});
