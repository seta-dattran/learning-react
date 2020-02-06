import React from 'react'
import FilterLink from './UserFilterLink'
import { VisibilityFilters } from '../../store/modules/Todo/constant'
import {Typography} from '@material-ui/core'

const UserFooter = () => (
  <div>
    <Typography variant="body1">Show:</Typography>
    <FilterLink filter={VisibilityFilters.SHOW_ALL} >
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default UserFooter
