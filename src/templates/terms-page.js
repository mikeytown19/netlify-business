/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TwoColumn from '../components/TwoColumn'

// import Offerings from '../components/Offerings'
// import Testimonials from '../components/Testimonials'

let PlaceHolder = 'https://bulma.io/images/placeholders/640x480.png'

export const TermsPageTemplate = ({
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
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />

    <TwoColumn gridItems={twoColumn.columns} />

    <div className='tile is-ancestor'>
      <div className='tile is-4 is-vertical is-parent'>
        <div className='tile is-child box is-warning'>
          <progress className='progress is-link' value='65' max='100'>65%</progress>

        </div>
        <div className='tile is-child box is-primary'>
          <p className='title'>Two</p>
        </div>
      </div>
      <div className='tile is-parent'>
        <div className='tile is-child box'>
          <p className='title'>Three</p>
        </div>
      </div>
    </div>

    <div className='tile is-ancestor'>
      <div className='tile is-vertical is-8'>
        <div className='tile'>
          <div className='tile is-parent is-vertical'>
            <article className='tile is-child notification is-primary'>
              <p className='title'>PRIMARY ...</p>
              <p className='subtitle'>Top tile</p>
            </article>
            <article className='tile is-child notification is-warning'>
              <p className='title'>WARNING...tiles</p>
              <p className='subtitle'>Bottom tile</p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child notification is-info'>
              <p className='title'>INFO tile</p>
              <p className='subtitle'>With an image</p>
              <figure className='image is-4by3'>
                <img src={PlaceHolder} />
              </figure>
            </article>
          </div>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-danger'>
            <p className='title'>DANGER tile</p>
            <p className='subtitle'>Aligned with the right tile</p>
            <div className='content'>
              Content
            </div>
          </article>
        </div>
      </div>
      <div className='tile is-parent'>
        <article className='tile is-child notification is-success'>
          <div className='content'>
            <p className='title'>SUCCESS Tall tile</p>
            <p className='subtitle'>With even more content</p>
            <div className='content'>
              Content
            </div>
          </div>
        </article>
      </div>
    </div>

  </div>
)

TermsPageTemplate.propTypes = {
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

const TermsPage = ({data}) => {
  console.log(data)
  const {frontmatter} = data.markdownRemark

  return (
    <TermsPageTemplate
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

TermsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TermsPage

export const pageQuery = graphql`
  query TermsPage($id: String!) {
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
