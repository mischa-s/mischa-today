import React from "react"
import PropTypes from "prop-types"
// import useSiteMetadata from "./SiteMetadata"
// import { Helmet } from "react-helmet";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { withPrefix } from "gatsby";
// import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
// import theme from "../theme/theme";
// import styled from "@emotion/styled";
// import Header from "./header"
import styled from "@emotion/styled"
import { Heading, Text } from "@chakra-ui/core"

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #f7f8ff;
`
const ContenteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  min-width: 350px;
  width: 100%;
  padding: 1rem 2rem;
`

const LeftBar = styled.div`
  min-height: 100%;
  width: 5rem;
  background-color: #b38b00;
`

const RightBar = styled.div`
  min-height: 100%;
  width: 5rem;
  background-color: #1a1b1f;
`

const TopBar = styled.div`
  background-color: #3399cc;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  color: white;
`
const TopBar2 = styled.div`
  background-color: #336633;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: white;
`

const Flex = styled.div`
  display: flex;
`

const Layout = ({ children }) => {
  // const { title, description } = useSiteMetadata()
  // #688bf6
  // #3399cc
  // #5da13c
  // #336633
  // #1A1B1F
  // #b38b00

  return (
    <>
      <Flex>
        <TopBar>
          <Heading as="h1" size="xl">
            Mischa
          </Heading>
          <Text as="i" fontSize="xs">
            This is not a cannonical place of Mischa's opinions
          </Text>
        </TopBar>
        <TopBar2>
          <Heading as="h1" size="xl">
            Today
          </Heading>
          <Text as="i" fontSize="xs">
            The fragements found here are ripples in time
          </Text>
        </TopBar2>
      </Flex>
      <main>
        <PageWrapper>
          <LeftBar />
          <ContenteWrapper>{children}</ContenteWrapper>
          <RightBar />
        </PageWrapper>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
