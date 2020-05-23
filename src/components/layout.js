import React from "react"
import PropTypes from "prop-types"
import useSiteMetadata from "./SiteMetadata"
// import { Helmet } from "react-helmet";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { withPrefix } from "gatsby";
// import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
// import theme from "../theme/theme";
// import styled from "@emotion/styled";
import Header from "./header"
import styled from "@emotion/styled"

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`
const ContenteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  min-width: 350px;
  width: 100%;
  margin: 1rem;
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
  height: 5rem;
  background-color: #688bf6;
  width: 50%;
`
const TopBar2 = styled.div`
  height: 5rem;
  background-color: #5da13c;
  width: 50%;
`

const Flex = styled.div`
  display: flex;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  // #688bf6
  // #5da13c
  // #1A1B1F
  // #b38b00

  return (
    <>
      <Flex>
        <TopBar />
        <TopBar2 />
      </Flex>
      <main>
        <PageWrapper>
          <LeftBar />
          <ContenteWrapper>{children}</ContenteWrapper>
          <RightBar />
        </PageWrapper>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
