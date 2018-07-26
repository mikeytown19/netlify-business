/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

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
      <div className=''>
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

    <div className='columns'>
      <section className='section'>
        <p className='title has-text-primary'>
          Our Mission
        </p>
        <p>Although the home inspection portion of your transaction is only one step to making a wise decision, it can play a BIG role in present and future costs associated with home ownership!</p>
      </section>
      <section className='section'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b4w7OvfVwCI?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </section>
    </div>
    <div className='container'>
      <div className='tile is-ancestor'>
        <div className='tile is-verticl is-12'>
          <div className='tile'>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-info'>
                <p className='title'>Services</p>

              </article>
            </div>
          </div>
          <div className='tile'>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-primary'>
                <p className='title'>About Us</p>

              </article>
            </div>
          </div>
          <div className='tile'>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-warning'>
                <p className='title has-text-white'>Contact</p>

              </article>
            </div>
          </div>

        </div>

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
