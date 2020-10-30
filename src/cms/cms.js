import CMS from "netlify-cms-app"
import Cloudinary from "netlify-cms-media-library-cloudinary"
import NewsPostPreview from "./preview-templates/news.previews"
import DefaultTemplatePreview from "./preview-templates/defaultTemplate.preview"

CMS.registerMediaLibrary(Cloudinary)

CMS.registerPreviewTemplate("announcement", NewsPostPreview)
CMS.registerPreviewTemplate("roundup", NewsPostPreview)
CMS.registerPreviewTemplate("training", NewsPostPreview)
CMS.registerPreviewTemplate("roll-of-honour", DefaultTemplatePreview)
CMS.registerPreviewTemplate("juniors", DefaultTemplatePreview)
