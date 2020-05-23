import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/index-page-preview'
import withEmotion from "./with-emotion";

CMS.registerPreviewTemplate('index', withEmotion(IndexPagePreview))
