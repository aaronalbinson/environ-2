import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby";
import AaFooter from "./AaFooter/AaFooter";

import Navbar from "../components/Navbar/Navbar";
import DesktopNavbar from "../components/DesktopNavbar/DesktopNavbar";
import Services from "../components/Services/Services";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "settings" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                companyaddress
                sociallinks {
                  facebook
                  twitter
                  instagram
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <Helmet title={node.frontmatter.title} />
            <DesktopNavbar />
            <Navbar />
            <div id="page-wrap">
              <div className="top">
                <AniLink cover bg="#359dd9" to="/">
                  <img
                    className="logo"
                    src={logo}
                    alt="Environ Digital"
                    style={{ width: "70px" }}
                  />
                </AniLink>
              </div>

              {children}
            </div>
            <AaFooter
              socialLinks={node.frontmatter.sociallinks}
              address={node.frontmatter.companyaddress}
            />
          </div>
        ))}
      </div>
    )}
  />
);

export default TemplateWrapper;
