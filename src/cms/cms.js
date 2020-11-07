import CMS from "netlify-cms-app"
import Cloudinary from "netlify-cms-media-library-cloudinary"
import NewsPostPreview from "./preview-templates/news.previews"
import DefaultTemplatePreview from "./preview-templates/defaultTemplate.preview"
import withStyledComponentsRendered from "./preview-templates/styledComponentsRender"

CMS.registerMediaLibrary(Cloudinary)

// CMS.registerPreviewTemplate("announcement", NewsPostPreview)
// CMS.registerPreviewTemplate("roundup", NewsPostPreview)
// CMS.registerPreviewTemplate("training", NewsPostPreview)
// CMS.registerPreviewTemplate("roll-of-honour", DefaultTemplatePreview)
// CMS.registerPreviewTemplate("juniors", DefaultTemplatePreview)

CMS.registerPreviewTemplate(
  "announcement",
  withStyledComponentsRendered(NewsPostPreview)
)
CMS.registerPreviewTemplate(
  "roundup",
  withStyledComponentsRendered(NewsPostPreview)
)
CMS.registerPreviewTemplate(
  "training",
  withStyledComponentsRendered(NewsPostPreview)
)
CMS.registerPreviewTemplate(
  "roll-of-honour",
  withStyledComponentsRendered(DefaultTemplatePreview)
)
CMS.registerPreviewTemplate(
  "juniors",
  withStyledComponentsRendered(DefaultTemplatePreview)
)
