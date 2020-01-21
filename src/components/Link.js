import React from 'react'
import PropTypes from 'prop-types'
import {Button} from '@material-ui/core'

const Link = ({ active, children, onClick }) => {  
  return (
    <Button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
       variant="contained"
       color="primary"
    >      
      {children}
    </Button>
)
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
