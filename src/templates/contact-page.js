/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'
import Form from '../components/Form'

export const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>

      <div className="section">
      <section className="columns section">


        <div className="column is-5">
        <p className="title">Contact Us</p>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
         <div className="field">
          <label className="label" for="name">Name</label>
          <div className="control">
            <input className="input" type="text"id="name" name="name" placeholder="Full Name" />
          </div>
        </div>


        <div className="field">
          <label className="label" for="email">Email</label>
          <div className="control">
            <input className="input" type="email" name="email"id="email"placeholder="Email" />
          </div>
        </div>


        <div className="field">
          <label className="label" for="number">Number</label>
          <div className="control">
            <input className="input" type="tel" id="number" name="number"placeholder="Phone Number" />
          </div>
        </div>





        <div className="field">
          <label className="label" for="message">Message</label>
          <div className="control">
            <textarea className="textarea" id="message" name="message"placeholder="Write us"></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>


      </form>

        </div>


      </section>


      </div>





    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

const ContactPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <ContactPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      contacts={frontmatter.contacts}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        contacts {
          email
          description
        }
      }
    }
  }
`
