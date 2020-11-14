import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';



const Jlpaint = ({ data }) => (

    
    <Img
    fluid={data.file.childImageSharp.fluid}
    alt="Peintures"
  />
)
export default Jlpaint


export const query = graphql`
  query {
    file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`