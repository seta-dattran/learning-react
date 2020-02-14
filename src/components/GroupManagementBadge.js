import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Tooltip, Button} from '@material-ui/core'
import {Add as AddIcon, ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons'

export default class GroupManagementBadge extends Component {

    static propTypes = {
        id: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        names: PropTypes.arrayOf(PropTypes.string).isRequired,
        addButtonLabel: PropTypes.string,
        onClick: PropTypes.func
    }

    static defaultProps = {
        addButtonLabel: 'ADD'
    }


    handleOnClick = () => {
        this.props.onClick();
    }

    getGroupDisplayItems = (names) => {
        return names.map(name => (
            <Button  
                variant="contained"
                color="primary"
            >
                {name}
            </Button>
        ));
    }

    render() {
        const {id, names, addButtonLabel } = this.props;

        const collapseBagde = (
            <>            
                {this.getGroupDisplayItems(names)}
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowDropDownIcon />}
                    onClick={this.handleOnClick}
                >
                    {`+${names.length -1 }`}
                </Button>
            </>
        );

        const defaultBagde = (
            <Button
                color="primary"
                variant="outlined"
                startIcon={<AddIcon />}
                endIcon={<ArrowDropDownIcon />}
                onClick={this.handleOnClick}
            >            
                {addButtonLabel}
            </Button>
        )            
        const badge = names.length <= 2 ? this.getGroupDisplayItems(names) : collapseBagde;
        
        return (
            <div>            
                {
                    names.length > 0 ?
                    badge :
                    defaultBagde
                }
            </div>
        )
    }
}

