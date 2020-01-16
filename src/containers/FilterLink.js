import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

import {createSelector} from 'reselect'

/*select data from state*/
const makeLinkSelector = createSelector(
  state => state.visibilityFilter,
  (_, filter) => {    
    return filter;
  },
  (visibilityFilter, filter) => {        
    return visibilityFilter === filter;
  }
)

const FilterLink = ({filter, ...remainsProps}) => {
  

  const active = useSelector(state => makeLinkSelector(state, filter));
    
  const dispatch = useDispatch();
  
  
  //dispatch
  const linkDispatch = {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    onClick: () => dispatch(setVisibilityFilter(filter))
  }


  return (    
      <Link active={active} {...linkDispatch} {...remainsProps }/>
  )
}

export default FilterLink
