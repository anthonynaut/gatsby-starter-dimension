import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"> Here's my info : <a href="https://www.linkedin.com/in/anthony-naut-a14b081b5/">LinkedIn</a> : <a href="https://github.com/anthonynaut">Github</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
