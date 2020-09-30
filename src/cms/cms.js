import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"

import NewsPostPreview from "../cms/preview-templates/NewsPostPreview"

CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("announcement", NewsPostPreview)
CMS.registerPreviewTemplate("roundup", NewsPostPreview)
