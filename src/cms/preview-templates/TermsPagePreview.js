/**
 * Created by vaibhav on 1/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import { TermsPageTemplate } from '../../templates/terms-page'

const TermsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryColumns = entry.getIn(['data', 'twoColumn', 'columns'])
  const columns = entryColumns ? entryColumns.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryContent = entry.getIn(['data', 'content'])
  const content = entryContent ? entryContent.toJS() : []

  return (
    <TermsPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      offerings={{ blurbs }}
      twoColumn={{ columns }}
      content={content}
      testimonials={testimonials}
    />
  )
}

TermsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TermsPagePreview
