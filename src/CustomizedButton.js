import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";

class CustomizedButton extends Component
{
    render()
    {
        const ButtonWithStyle = withStyles({
            root: {
                fontSize: 16,
                color:'grey',
                border: '1px solid rgba(253,199,141,1)',
                fontFamily:'Impact, Charcoal, sans-serif',
                '&:hover': {
                    backgroundColor: 'rgba(253,199,141,1)',
                    color:'white',
                    boxShadow: 'none',
                },
                // '&:active': {
                //     boxShadow: 'none',
                //     backgroundColor: '#0062cc',
                // },
                '&:focus': {
                    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                },
            },
        })(Button);

        return (
            <ButtonWithStyle  variant="outlined" size="small"  onClick={this.props.onClick} disableElevation> <strong>{this.props.content}</strong></ButtonWithStyle>
       );
    }
}

export default CustomizedButton;