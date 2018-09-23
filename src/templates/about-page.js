/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, {HTMLContent} from '../components/Content'
import Kory from '../img/kory.jpg'
import John from '../img/john.jpg'
import Corbet from '../img/corbet.jpg'
import Shauna from '../img/shauna.jpg'

export const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="section">
        <div className='columns'>
          <div className='column is-two-thirds'>
            <p className="title">Kory Wayment</p>
            <p>Kory was raised in Warren, Utah where he grew up on a dairy farm ran by his family. He attended Fremont High School, then later graduated with his degree from Salt Lake Community College.</p>
            <p>In 2001 while attending college on a baseball scholarship Kory was drafted in the 23rd round by the Oakland A's to become a professional baseball player. While spending almost a decade traveling all over North America, working his way up through the minor leagues he developed a work ethic, drive and an appreciation for perseverance.</p>
            <p>Once retiring from baseball in 2008 he jumped right into the real estate world and has had great success in selling, building and investing in many real estate ventures.</p>
            <p>After a short career as a realtor he noticed the immense value for both an honest and knowledgeable home inspector to help educate home buyers of all types.</p>
            <p>In the Fall of 2012 he founded High Mountain Home Inspections and has since been one of the most reputable, honest and fastest growing inspection companies in Northern Utah. Closing in on almost 6,500 home inspections he prides himself on treating home buyers with the upmost respect, showing patience, honesty and a genuine care for every home buyer.</p>
            <p>Kory currently resides with his wife Witney, children Maura, Walt, and Nora on a small farm North of Brigham City where he raises beef cattle as a hobby and spends most of his time outside.</p>
          </div>
          <div className='column '>
          <img src={Kory} alt=''/>
          </div>

        </div>
      </section>

      <section className="section">
        <div className='columns img-bottom-small'>
          <div className='column '>
            <img src={John} alt=''/>
          </div>
          <div className='column is-two-thirds'>
            <p className="title">John Pilarczyk</p>
            <p>John has been in the construction industry for the past 18 years. There he has learned the ins and outs of every construction trade. John was a superintendent at the ripe age of 26 years old.</p>
            <p>He built over 100 homes and 312 storage units. John learned the importance of interacting with homeowners, subcontractors, and city inspectors. 13 of those 18 years he specialized in the exterior side of homebuilding where he was regarded as one of the top installers in Northern Utah.</p>
            <p>In John’s spare time he enjoys camping and ATVing with his family, but his passion is hunting with his boys Tanner and Landon while his wife and daughter Tenille and BrookLyn have mommy-daughter time. Honesty and integrity are his biggest traits and he would love to “Look Closer at Your Investment!”</p>
          </div>

        </div>
      </section>

       <section className="section">
        <div className='columns'>
          <div className='column is-two-thirds'>
            <p className="title">Corbet Bess</p>
            <p>Corbet has been involved in the construction and real estate industry his whole life. Growing up, his family owned and operated various companies in the industry. His dad and step dad as general contractors, mom and grandpa as real estate agents, and other family members owning plumbing and excavation companies. Corbet also currently operates his step dads roofing company, so it's safe to say he knows his way around a job site.</p>
            <p>In his spare time Corbet enjoys being around his family, wife Cheltsea, son Cooper, and his parents and siblings. He has a very adventurous family that loves to go out and try new things, making plenty of unforgettable memories. If you don't catch Corbet at work or with family, he's probably out hunting the marsh or the high country on his atv or snowmobile. He also loves to go camping, fishing and enjoy the outdoors.</p>
          </div>
          <div className='column '>
            <img src={Corbet} alt=''/>
          </div>

        </div>
      </section>

       <section className="section">
        <div className='columns img-bottom-small'>
          <div className='column '>
            <img src={Shauna} alt=''/>
          </div>
          <div className='column is-two-thirds'>
            <p className="title">Shauna Allen</p>
            <p>A little about Shauna.  She lives in Plain City with her Husband Cole and 4 awesome kids Cooper, Ty, Aspen & Kaiya!  She loves running, camping, hiking, boating, playing sports and just spending time with her family! </p>
          </div>

        </div>
      </section>


    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </div>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
