import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text } from "@chakra-ui/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "@chakra-ui/core"
import { Heading } from "@chakra-ui/core"
import { Flex } from "@chakra-ui/core"
import BlogRoll from "../components/BlogRoll"

export const IndexPageTemplate = ({ title }) => (
  <>
    <SEO title="Home" />
    <Heading as="h4" size="lg" fontWeight={500} textAlign={"center"} my={5}>
      <Text fontSize="xl">{title}</Text>
    </Heading>
    <BlogRoll />
    <Flex justify={"center"}>
      <Link to="/blog">
        <Button size="lg" variant="outline">
          Read More
        </Button>
      </Link>
    </Flex>
  </>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
