/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


export const OwnershipPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  Ownerships,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <div className="section">
      <section className="columns">
       <div className="column">
          <p className="title">Ownership</p>

            <div className="columns">
          <div className="column">
            <article className="message is-warning">
              <div className="message-header">
                <p className="is-size-5 color-white">Exterior</p>
              </div>
              <div className="message-body">
                <ul>
                  <li>Secure wall cladding, trim.</li>
                  <li>Paint all exterior wood.</li>
                  <li>Monitor concrete for settlement</li>
                </ul>
              </div>
            </article>
          </div>
            <div className="column">
              <article className="message is-warning">
                <div className="message-header ">
                  <p className="is-size-5 color-white">Roof</p>
                </div>
                <div className="message-body">
                  <ul>
                    <li> Monitor shingles.</li>
                    <li> Install and maintain gutter system.</li>
                    <li> Secure fascia, soffit, trim.</li>
                    <li> Direct water away from foundation and high traffic areas.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <article className="message is-warning">
                <div className="message-header">
                  <p className="is-size-5 color-white">Hvac</p>
                </div>
                <div className="message-body">
                  <ul>
                    <li>Cover A/C unit with canvas (breathable) cover during winter.</li>
                    <li>Insulate exterior refrigerant lines.</li>
                    <li>Clean filter around compression unit.</li>
                    <li>Change air filter often</li>
                    <li>Have "green sticker" service annually.</li>
                    <li>Maintain condensate line.          </li>
                  </ul>
                </div>
              </article>
            </div>
              <div className="column">
                <article className="message is-warning">
                  <div className="message-header">
                    <p className="is-size-5 color-white">Plumbing</p>
                  </div>
                  <div className="message-body">

                    <ul>
                      <li>Secure toilets.</li>
                      <li>MONITOR for leaks. (Because they are inevitable)</li>
                      <li>Drain water heater 1 time per year. </li>
                    </ul>
                  </div>
                </article>
              </div>
          </div>

          <div className="columns">
            <div className="column">
              <article className="message is-warning">
                <div className="message-header">
                  <p className="is-size-5 color-white">Electrical</p>
                </div>
                <div className="message-body">
                  <ul>
                    <li>Install cove plates.</li>
                    <li>Install cove plates.</li>
                    <li>Test GFCI's often.</li>
                    <li>Label panel box clearly.</li>
                  </ul>
                </div>
              </article>
            </div>
              <div className="column">
                <article className="message is-warning">
                  <div className="message-header">
                    <p className="is-size-5 color-white">Misc</p>
                  </div>
                  <div className="message-body">
                    <ul>
                      <li>Install ceiling cans.</li>
                      <li>Vacuum often.</li>
                      <li>Clean/Maintain your jetted tub.</li>
                      <li>Update your insulation! (Contact us for more information.)</li>
                    </ul>

                  </div>
                </article>
              </div>
          </div>
          <br/>
          <p>Your report will contain many details from materials, structures and finishes. We include dozens of pictures along with model reference numbers, as well as recommendations and reasonings for repair items listed. </p>

          <p> We highly encourage you to be present at the end of the inspection for a final walk through to allow us to summarize our findings. We take pride in taking as much time as you need to gain a better understanding of your investment!</p>
        </div>
      </section>

    </div>



    </div>
  )
}

OwnershipPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  Ownerships: PropTypes.array,

}

const OwnershipPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <OwnershipPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      Ownerships={frontmatter.Ownerships}
    />
  )
}

OwnershipPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default OwnershipPage

export const OwnershipPageQuery = graphql`
  query OwnershipPage($id: String!) {
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
