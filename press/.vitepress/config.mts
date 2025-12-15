import { defineConfig } from "vitepress"
import { pagefindPlugin } from "vitepress-plugin-pagefind"

export default defineConfig({
  head: [
    ["link", { rel: "icon", type:"image/png", href: "https://storage.googleapis.com/static-logout/poppel/favicon.png" }]
  ],
  title: "PoppelNytt",
  description: "PoppelNytt Luta NYTT!",
  themeConfig: {
    nav: [
      { text: "Heim", link: "/" },
    ],
    search: {
      provider: "local"
    },
    docFooter: {
      prev: "førrige poppelNytt",
      next: "neste poppelNytt"
    },
    logo: "https://storage.googleapis.com/static-logout/poppel/favicon.png",
    sidebar: [
      {
        text: "Arkiv",
        base: "/nytt/",
        items: [
          {
            text: "1999 utgåve 1",
            link: "poppel-1999-1.md"
          },
          {
            text: "1999 utgåve 2",
            link: "poppel-1999-2.md"
          },
          {
            text: "1999 utgåve 3",
            link: "poppel-1999-3.md"
          },
          {
            text: "2000 utgåve 1",
            link: "poppel-2000-1.md"
          },
          {
            text: "2000 utgåve 2",
            link: "poppel-2000-2.md"
          },
          {
            text: "2000 utgåve 3",
            link: "poppel-2000-3.md"
          },
          {
            text: "2000 utgåve 4",
            link: "poppel-2000-4.md"
          },
          {
            text: "2001 utgåve 1",
            link: "poppel-2001-1.md"
          },
          {
            text: "2001 utgåve 2",
            link: "poppel-2001-2.md"
          },
          {
            text: "2002 utgåve 1",
            link: "poppel-2002-1.md"
          },
          {
            text: "2002 utgåve 2",
            link: "poppel-2002-2.md"
          },
          {
            text: "2003 utgåve 1",
            link: "poppel-2003-1.md"
          },
          {
            text: "2004 utgåve 1",
            link: "poppel-2004-1.md"
          },
          {
            text: "2006 utgåve 1",
            link: "poppel-2006-1.md"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/pvg57" }
    ]
  },
  vite: {
    plugins: [pagefindPlugin({
      btnPlaceholder: 'Søkj',
      placeholder: 'Søk Poppel!',
      emptyText: 'Skriv inn',
      heading: 'result: {{searchResult}}',
    })]
  }
})
