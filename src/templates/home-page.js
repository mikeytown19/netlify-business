/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Testimonials from '../components/Testimonials'

// import Offerings from '../components/Offerings'
// import Testimonials from '../components/Testimonials'



export const HomePageTemplate = ({
  title,
  heading,
  content,
  twoColumn,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div className="  bg-home">
      <section className='section is-bold'>
          <div className='flex-center'>
            <h1 className='title color-white text-center is-size-2'>
              {title}
            </h1>
            <p className='color-white font-large text-center'>Serving the Wasatch front Area with More Than 6,000 Homes Inspected!</p>

            <div className="columns">
              <a className='color-white' href='tel:801-699-7485'><h2 className="is-size-4">801-699-7485</h2></a>
              <br/><br/><br/><br/>

              {/* <Link className='button is-primary btn is-hidden-mobile' to='/contact'>Contact Us</Link> */}
            </div>

          </div>
      </section>
    </div>
    <br />

    <div className='columns'>
      <div className='column is-half'>
        <p className='title has-text-primary'>
          Our Mission
        </p>
        <p>Although the home inspection portion of your transaction is only one step to making a wise decision, it can play a BIG role in present and future costs associated with home ownership!</p>
      </div>
      <div className='column is-half'>
        <iframe className="youtube" width='100%' height='315' src='https://www.youtube.com/embed/b4w7OvfVwCI?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
      </div>
    </div>

        <div className='columns'>
      <section className='section'>
      <h3 className='has-text-weight-semibold is-size-3 has-text-primary'>Testimonials</h3>
   <Testimonials testimonials={testimonials} />
      </section>
    </div>


  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  content: PropTypes.string,
  twoColumn: PropTypes.shape({
    columns: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

const HomePage = ({data}) => {
  console.log(data)
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      content={frontmatter.content}
      twoColumn={frontmatter.twoColumn}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading

        content
        twoColumn {
          columns {
            title
            text
          }
        }
        description
        offerings {
          blurbs {
            title
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
