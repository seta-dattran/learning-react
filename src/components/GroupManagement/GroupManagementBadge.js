import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button} from '@material-ui/core'
import {Add as AddIcon, ArrowDropDown as ArrowDropDownIcon, MoreHoriz as MoreHorizIcon } from '@material-ui/icons'
import {withStyles} from '@material-ui/core/styles'

const styles = {
    groupItem: {
        background: '#6794DC',
        color: '#ffffff',
        marginRight: '4px',
        "&:hover": {
            backgroundColor: '#6794DC'
        }
    },
    defaulBtn: {
        color: '#2196F3',
        borderColor: '#2196F3',
        "&:hover": {
            borderColor: '#2196F3'
        }
    }    
}

class GroupManagementBadge extends Component {

    static propTypes = {
        id: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        names: PropTypes.arrayOf(PropTypes.string).isRequired,
        addButtonLabel: PropTypes.string,
        onClick: PropTypes.func.isRequired
    }

    static defaultProps = {
        addButtonLabel: 'ADD'
    }

    handleOnClick = () => {        
        this.props.onClick();
    }

    getGroupDisplayItems = (names) => {

        const {classes} = this.props;

        return names.map(name => (
            <Button  
                variant="contained"
                color="primary"
                className={classes.groupItem}
                size="small"
            >
                {name}
            </Button>
        ));
    }
    
    renderContent = () => {

        const {names, maxGroupsToDisplay, classes, addButtonLabel } = this.props;
                
        const defaultBagde = (
            <Button
                color="primary"
                variant="outlined"
                startIcon={<AddIcon />}
                endIcon={<ArrowDropDownIcon />}
                onClick={this.handleOnClick}
                className={classes.defaulBtn}
                size="small"
            >            
                {addButtonLabel}
            </Button>            
        )
                    
        if(names.length === 0){
            return defaultBagde;
        }

        if(names.length <= maxGroupsToDisplay ) {
            return (
                <>
                    {this.getGroupDisplayItems(names)}
                    <Button >
                        <MoreHorizIcon style={{color: "rgba(0,0,0,0.54)"}} />
                    </Button>
                </>
            );
        }

        const displayChunk = names.slice(0, maxGroupsToDisplay - 1);
        //const restChunk = names.slice(maxGroupsToDisplay - 1);                
        
        const collapseBagde = (
            <>            
                {this.getGroupDisplayItems(displayChunk)}
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowDropDownIcon />}
                    onClick={this.handleOnClick}
                    className={classes.groupItem}
                    size="small"                        
                    >
                        {`+${names.length - maxGroupsToDisplay + 1 }`}
                    </Button>
                <Button >
                    <MoreHorizIcon style={{color: "rgba(0,0,0,0.54)"}}/>
                </Button>
            </>
        );

        return collapseBagde;
    }

    render() {
        return (
            <div>            
                {this.renderContent()}
            </div>
        )
    }
}

export default withStyles(styles)(GroupManagementBadge);