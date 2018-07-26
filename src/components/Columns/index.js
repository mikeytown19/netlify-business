/**
 * Created by vaibhav on 1/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Columns = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.title} className='column is-6' style={{borderRadius: '5px'}}>
        <section className='section'>
          <p className='title has-text-primary'>
            {item.title}
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

Columns.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Columns
