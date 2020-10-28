import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Redirect } from "react-router-dom";
import copy from "copy-to-clipboard";


class ResultDialogComponents extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            open : true,
            accessToken :this.props.accesstoken
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);

    }

    handleClickOpen ()
    {
        this.setState({
            open:true
        });
    };

    handleClose ()
    {
        this.setState({
            open:false
        });
    };

    copyToClipboard () {
        copy(this.state.accessToken);
    };

    render()
    {
        let currentComponent;

        const alterDialog = < Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">{"Generated Access token"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {this.state.accessToken}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} variant="contained" color="primary">
                                    Close
                                </Button>
                                <Button onClick={this.copyToClipboard} variant="contained" color="primary">
                                    Copy
                                </Button>
                            </DialogActions>
                        </Dialog>;


        //Redirect component from react-route-dom to redirect to home
        currentComponent =  this.state.open ? alterDialog : <Redirect to="/"/>;

        return (
           <div>
               {currentComponent}
           </div>
        );
    }
}

export default ResultDialogComponents;