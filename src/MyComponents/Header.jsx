

import PropTypes from 'prop-types'

import React from 'react'


function Header(props) {
    const myStyle = {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 200,
        backgroundColor: 'green',
      };
  return (
  

        
<nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <a style={myStyle} className="navbar-brand" >{props.title}</a>

</nav>
 
  )
}
Header.defaultProps = {
  title : "Your Title here",
  searchBar : true
}
Header.propTypes ={
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
export default Header