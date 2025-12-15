import { defineConfig } from "vitepress"

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
        base: "nytt/",
        items: [
          {
            text: "1999 utgåve 1",
            link: "poppel-1999-1"
          },
          {
            text: "1999 utgåve 2",
            link: "poppel-1999-2"
          },
          {
            text: "1999 utgåve 3",
            link: "poppel-1999-3"
          },
          {
            text: "2000 utgåve 1",
            link: "poppel-2000-1"
          },
          {
            text: "2000 utgåve 2",
            link: "poppel-2000-2"
          },
          {
            text: "2000 utgåve 3",
            link: "poppel-2000-3"
          },
          {
            text: "2000 utgåve 4",
            link: "poppel-2000-4"
          },
          {
            text: "2001 utgåve 1",
            link: "poppel-2001-1"
          },
          {
            text: "2001 utgåve 2",
            link: "poppel-2001-2"
          },
          {
            text: "2002 utgåve 1",
            link: "poppel-2002-1"
          },
          {
            text: "2002 utgåve 2",
            link: "poppel-2002-2"
          },
          {
            text: "2003 utgåve 1",
            link: "poppel-2003-1"
          },
          {
            text: "2004 utgåve 1",
            link: "poppel-2004-1"
          },
          {
            text: "2006 utgåve 1",
            link: "poppel-2006-1"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/pvg57" }
    ]
  }
})
