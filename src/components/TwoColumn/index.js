/**
 * Created by vaibhav on 1/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const TwoColumn = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.title} className='column is-6'>
        <section className='section'>
          <p className='title'>
            {item.title}
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

TwoColumn.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default TwoColumn
