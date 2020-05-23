import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text } from "@chakra-ui/core";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const IndexPageTemplate = ({title}) => (
  <>
    <SEO title="Home" />
    <Box p={8}>
      <Text fontSize="xl">{title}</Text>
    </Box>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;

