import React from 'react'
import GroupManagementBadge from './GroupManagementBadge';
import PopoverItemSelector from './PopoverItemSelector';

const GroupManagement = (props) => {

    const { selected, groups, maxGroupsToDisplay, onChange} = props;

    const handleOpenPopoverGroupSelector = () => {
        console.log('do somthing')
    }
    const names1 = [
   
    ];
    const names2 = [
        'GOVERMENT INITIATIVE',
    ];
    const names3 = [
        'GOVERMENT INITIATIVE',
        'TRAINING TEAM',
    ];
    const names4 = [
        'GOVERMENT INITIATIVE',
        'TRAINING TEAM',
        'ATTRIBUTE TEAM',
        'DESIGN TEAM'
    ]
    return (
        <div>
            <GroupManagementBadge 
                onClick={handleOpenPopoverGroupSelector} 
                names={names1} 
            />
            <GroupManagementBadge 
                names={names2}
                onClick={handleOpenPopoverGroupSelector} 
            />
            <GroupManagementBadge 
                names={names3} 
                onClick={handleOpenPopoverGroupSelector} 
            />
            <GroupManagementBadge 
                names={names4} 
                onClick={handleOpenPopoverGroupSelector}                    
            />
            <PopoverItemSelector />
        </div>
    )
}

export default GroupManagement
