/**
 * Created by vaibhav on 31/3/18
 */
import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import ServicePagePreview from './preview-templates/ServicePagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import TermsPagePreview from './preview-templates/TermsPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('services', ServicePagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)
CMS.registerPreviewTemplate('terms', TermsPagePreview)
