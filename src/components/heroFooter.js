import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Avatar from "../images/avatar.svg";
import { useNetworkStatus } from "react-adaptive-hooks/network";
export default () => {
  const { effectiveConnectionType } = useNetworkStatus();
  const data = useStaticQuery(graphql`
    query {
      
      image: file(relativePath: { eq: "1.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <div >
      
        
      <div >
        {effectiveConnectionType == "2g" ||
        effectiveConnectionType == "slow-2g" ? (
          <img className="center" src={Avatar} />
        ) : (
          <Img
            className="center"
            alt="profil"
            fluid={data.image.childImageSharp.fluid}
            fadeIn={true}
          />
        )}
      </div>
    </div>
  );
};