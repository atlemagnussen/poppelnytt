// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import "@cynber/vitepress-valence/style.css"
import { VpvImageGallery } from "@cynber/vitepress-valence"
///@ts-ignore
import { data as galleryData} from "./data/gallery.data"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component("VpvImageGallery", VpvImageGallery)
    app.provide('galleryData', galleryData)
  }
} satisfies Theme
