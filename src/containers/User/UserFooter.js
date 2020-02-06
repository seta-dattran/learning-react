import React from 'react'
import FilterLink from './UserFilterLink'
import { VisibilityFilters } from '../../store/modules/Todo/constant'
import {Typography} from '@material-ui/core'
import Link from 'redux-first-router-link'

const UserFooter = ({currentUser}) => (
  <div>
    <Typography variant="body1">Show:</Typography>
    <Link to={`/user/${currentUser}/all`}>
      All
    </Link>
    <Link to={`/user/${currentUser}/completed`}>
      Completed
    </Link>
    <Link to={`/user/${currentUser}/active`}>
      Active
    </Link>
    
    {/* <FilterLink filter={VisibilityFilters.SHOW_ALL} >
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink> */}
  </div>
)

export default UserFooter
