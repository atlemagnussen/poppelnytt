//import { } from "@cynber/vitepress-valence"

interface ImageForGallery {
  path: string
  folder: string
  filename: string
}

// https://storage.googleapis.com/static-logout/images/fyrverkeri05/DSC06136.JPG
const baseUrl = "https://storage.googleapis.com/static-logout/images/fyrverkeri05/"

const fyrverkeriAlbum = [
"DSC06136.JPG","DSC06138.JPG","DSC06141.JPG","DSC06143.JPG",
"DSC06146.JPG","DSC06154.JPG","DSC06158.JPG","DSC06162.JPG",
"DSC06164.JPG","DSC06166.JPG","DSC06169.JPG","DSC06173.JPG",
"DSC06175.JPG","DSC06177.JPG","DSC06137.JPG","DSC06140.JPG",
"DSC06142.JPG","DSC06144.JPG","DSC06147.JPG","DSC06157.JPG",
"DSC06159.JPG","DSC06163.JPG","DSC06165.JPG","DSC06168.JPG",
"DSC06170.JPG","DSC06174.JPG","DSC06176.JPG","DSC06178.JPG"]

export default {
  load() {
    return fyrverkeriAlbum.map(filename => {
      return {
        path: `${baseUrl}${filename}`,
        folder: "fyrverkeri05",
        filename
      } as ImageForGallery
    })
  }
}