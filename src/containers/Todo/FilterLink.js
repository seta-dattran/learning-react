import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibilityFilter } from '../../store/modules/Todo/action'
import Link from '../../components/Link'

import {filterSelector} from '../../store/modules/Todo/selector'

/*select data from state*/

const FilterLink = ({filter, ...remainsProps}) => {
  
  const active = useSelector(state => filterSelector(state, filter));    
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
