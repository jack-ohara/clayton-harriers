import CMS from "netlify-cms-app"
import Cloudinary from "netlify-cms-media-library-cloudinary"
import NewsPostPreview from "./preview-templates/news.previews"

CMS.registerMediaLibrary(Cloudinary)

CMS.registerPreviewTemplate("announcement", NewsPostPreview)
CMS.registerPreviewTemplate("roundup", NewsPostPreview)
