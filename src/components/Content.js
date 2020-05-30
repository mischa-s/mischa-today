import React from "react"
import PropTypes from "prop-types"

export const HTMLContent = ({ content, className }) => {
  console.log("clssname", className)
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

const Content = ({ content, className }) => {
  console.log("content clssname", className)

  return <div className={className}>{content}</div>
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
