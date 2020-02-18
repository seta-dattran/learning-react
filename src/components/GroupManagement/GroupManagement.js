import React, {Component} from 'react'
import PropTypes from 'prop-types'
import GroupManagementBadge from './GroupManagementBadge';
import PopoverItemSelector from './PopoverItemSelector';

const names1 = [];
const names2 = [
    'REACT TEAM',
];
const names3 = [
    'JAVA TEAM',
    'TRAINING TEAM',
];
const names4 = [
    'pYTHON INITIATIVE',
    'TRAINING TEAM',
    'ATTRIBUTE TEAM',
    'DESIGN TEAM'
]
const names5 = [
    'GOVERMENT INITIATIVE',
    'TRAINING TEAM',
    'TRAINING TEAM',
    'GOVERMENT INITIATIVE',
    'TRAINING TEAM',
    'ATTRIBUTE TEAM',
    'DESIGN TEAM'
]
class GroupManagement extends Component {    

    handleOpenPopoverGroupSelector = () => {
        console.log('do somthing')
    }
    handlePopoverChange = () => {
        console.log('do smt whne popover change');
        
    }
    handleClosePopoverGroupSelector = () => {
        console.log('do smt when popover close');        
    }

    render() {
        const { selectedIds, groups, maxGroupsToDisplay, onChange} = this.props;
        return (
            <div>
                <GroupManagementBadge 
                    maxGroupsToDisplay={maxGroupsToDisplay}
                    onClick={this.handleOpenPopoverGroupSelector}
                    names={names1}
                />
                <GroupManagementBadge 
                    maxGroupsToDisplay={maxGroupsToDisplay}
                    onClick={this.handleOpenPopoverGroupSelector}
                    names={names2}
                />
                <GroupManagementBadge 
                    maxGroupsToDisplay={maxGroupsToDisplay}
                    onClick={this.handleOpenPopoverGroupSelector}
                    names={names3}
                />
                <GroupManagementBadge 
                    maxGroupsToDisplay={maxGroupsToDisplay}
                    onClick={this.handleOpenPopoverGroupSelector}
                    names={names4}
                />
                <GroupManagementBadge 
                    maxGroupsToDisplay={maxGroupsToDisplay}
                    onClick={this.handleOpenPopoverGroupSelector}
                    names={names5}
                />
                <PopoverItemSelector selectedIds={selectedIds} />
            </div>
        )
    }
}

GroupManagement.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.number, PropTypes.string)),
    groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
    name: PropTypes.string
    })),
    maxGroupsToDisplay: PropTypes.number
}

GroupManagement.defaultProps = {
    maxGroupsToDisplay: 3
}

export default GroupManagement;