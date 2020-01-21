import React from 'react'
import FilterLink from '../containers/Todo/FilterLink'
import { VisibilityFilters } from '../store/modules/Todo/constant'
import {Typography} from '@material-ui/core'
const Footer = () => (
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

export default Footer
