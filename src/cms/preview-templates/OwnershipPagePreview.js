/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import { OwnershipPageTemplate } from '../../templates/ownership-page'

const OwnershipPagePreview = ({ entry, getAsset }) => {
  const entryOwnerships = entry.getIn(['data', 'Ownerships'])
  const Ownerships = entryOwnerships ? entryOwnerships.toJS() : []

  return (
    <OwnershipPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      Ownerships={Ownerships}
    />
  )
}

OwnershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OwnershipPagePreview
