import React from 'react'
import Helmet from 'react-helmet'



const Success = (props) => (
    <div>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>


        <div className="section">
          <section className="section">
            <p className="is-size-2 ">Success! <br/> Thank you for contacting us!</p>
          </section>
        </div>

    </div>
)

export default Success