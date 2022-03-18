import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/LinkTag.css"

const LinkTag = ({text, path}) => {
  return (
    <p>
      {text} {<Link to={path}>Click here</Link>}
    </p>
  );
}

export default LinkTag