import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

class InputCardComponent extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            'domainURL':'',
            'clientID':'',
            'scope':'',
            'redirectURI':''
        };
        this.generateAccessToken = this.generateAccessToken.bind(this)
    }

    generateAccessToken()
    {
        const domain = this.state.domainURL;
        const clientID = this.state.clientID;
        const scope = this.state.scope;
        const redirectURI = this.state.redirectURI;

        const request = domain + "/oauth/v2/auth?client_id="+clientID+"&response_type=token&scope="+scope+"&redirect_uri="+redirectURI;

        window.open(request);

    }

    render()
    {
        const domains = [
            {
                value: 'https://accounts.zoho.com',
                label: 'https://accounts.zoho.com',
            },
            {
                value: 'https://accounts.localzoho.com',
                label: 'https://accounts.localzoho.com',
            },
            {
                value: 'https://accounts.csez.zohocorpin.com',
                label: 'https://accounts.csez.zohocorpin.com',
            },
        ];
        const rootStyle = {
            minWidth:275
        };

        const textFieldStyle = {
            margin:'3vmin',
            width: '35ch'
        };

        const buttonStyle = {
            fontSize:'2vmin'
        };

        return (
        <div className="App">
            <header className="App-header">
                <Card variant="elevation">
                     <CardContent style={rootStyle}>
                            <form  noValidate autoComplete="off">
                                <TextField
                                    id="domain-url"
                                    select
                                    label="Domain URl"
                                    value = {this.state.domainURL}
                                    onChange={e => this.setState({ domainURL : e.target.value })}
                                    style={textFieldStyle}
                                >
                                    {domains.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <div/>
                                <TextField
                                    id="client-id"
                                    label="Client ID"
                                    onChange={e => this.setState({ clientID : e.target.value })}
                                    style={textFieldStyle}
                                />
                                <div/>
                                <TextField
                                    id="service-scope"
                                    label="Service Scope"
                                    onChange={e => this.setState({ scope : e.target.value })}
                                    style={textFieldStyle}
                                />
                                <div />
                                <TextField
                                    id="redirect-uri"
                                    label="Redirect URI"
                                    onChange={e => this.setState({ redirectURI : e.target.value })}
                                    style={textFieldStyle}
                                />
                            </form>
                            <Button style={buttonStyle} onClick={this.generateAccessToken} size="small" variant="contained" color="primary">Generate Access token</Button>
                        </CardContent>
                </Card>
            </header>
        </div>
        );
    }
}
export default InputCardComponent;


