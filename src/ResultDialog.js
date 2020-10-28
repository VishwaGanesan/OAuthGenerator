import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {Redirect } from "react-router-dom";
import copy from "copy-to-clipboard";
import Alert from "@material-ui/lab/Alert/Alert";
import Collapse from "@material-ui/core/Collapse/Collapse";
import CustomizedButton from "./CustomizedButton";
import AlertTitle from "@material-ui/lab/AlertTitle";

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
        this.setState(
            {open:false
            });
    };

    render()
    {
        let currentComponent;

        const alterDialog = < Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            fullWidth="true"
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogContent  style={{overflow:"hidden"}}>
                                <Collapse style={{display:"inline"}} in={this.state.open}>
                                    <Alert severity="success">
                                        <AlertTitle>Access Token generated successfully</AlertTitle>
                                        <div className="Result-content">
                                         {this.state.accessToken}
                                        </div>
                                    </Alert>
                                </Collapse>
                            </DialogContent>
                            <DialogActions>
                                <CustomizedButton onClick={this.handleClose.bind(this)} content="Close"/>
                                <CustomizedButton onClick={this.copyToClipboard.bind(this)} content="Copy" />
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