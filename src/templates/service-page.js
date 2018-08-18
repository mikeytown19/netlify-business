/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import tools from '../img/tools.jpg'


export const ServicePageTemplate = ({
  title,
  meta_title,
  meta_description,
  services,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>


    <div className="section">
      <section className="columns is-desktop">
       <div className="column">
          <p className="title">Services</p>

          <ul>
            <li>Pre-Listing Home Inspection</li>
            <li>Infrared Imaging</li>
            <li>Radon Testing NRPP#107168RT</li>
            <li>Lead Base Paint Testing</li>
            <li>Asbestos Testing</li>
            <li>Mold/Air Quality Sampling(Spore traps)</li>
            <li>Main Sewer Line Scope/Camera</li>
            <li>Methamphetimine Testing</li>
            <li>Termite Inspections</li>
          </ul>
          <br/>
          <p>Your report will contain many details from materials, structures and finishes. We include dozens of pictures along with model reference numbers, as well as recommendations and reasonings for repair items listed. </p>

          <p> We highly encourage you to be present at the end of the inspection for a final walk through to allow us to summarize our findings. We take pride in taking as much time as you need to gain a better understanding of your investment! Download the Investment Property Disclosure/Agreement <a href='Investment Property Disclosure/Agreement'>here:</a></p>
        </div>

        <div className="column text-center">
        <img className="tools" src={tools} alt=''/>
        </div>
      </section>

    </div>




        </div>
       )

ServicePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  services: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ServicePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <ServicePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      services={frontmatter.services}
    />
  )
}

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicePage

export const ServicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        services {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
