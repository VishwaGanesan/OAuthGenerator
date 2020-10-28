import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import CustomizedButton from "./CustomizedButton";

const domains = [
    {
        value: 'https://accounts.zoho.com',
        label: 'https://accounts.zoho.com',
    }
];

//Map of client IDs and domains
const domainClientIDMap = new Map([

    ["https://accounts.zoho.com"  , "1000.WOY67PUCV4VKNTCBWKOGCO1V8UGV2P" ]

]);

const CssTextField = withStyles({
    root: {
        margin:'3vmin',
        width: '35ch',
        fontFamily:'font-family: Impact, Charcoal, sans-serif',
        '& label.Mui-focused': {
            color: 'rgba(253,199,141,1)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgba(253,199,141,1)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(253,199,141,1)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(253,199,141,1)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(253,199,141,1)',
            },
        },
    },
})(TextField);

const CssCardContent = withStyles({
    root: {
        minWidth:275,
    }
})(CardContent);

//Switch redirect uri for testing purpose
let redirectURI = 'https://vishwaganesan.github.io/OAuthGenerator';
if(process.env.NODE_ENV !== 'production')
{
    redirectURI = 'http://localhost:3000/OAuthGenerator';
}

class InputCardComponent extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            'domainURL':'',
            'clientID':'',
            'scope':'',
            'redirectURI':'',
            'openAlert':false,
            'errorMsg':''
        };
        this.generateAccessToken = this.generateAccessToken.bind(this)
    }

    generateAccessToken()
    {
        let clientID;
        const domain = this.state.domainURL;
        const scope = this.state.scope;
        let fieldName;
        if(domain === "")
        {
            fieldName = "Domain url ";
        }
        if(scope === "")
        {
            if(!fieldName)
            {
                fieldName = "Scope";
            }
            else
            {
                fieldName = fieldName +"& Scope";
            }
        }
        if(fieldName)
        {
            this.setState({errorMsg: "Please select " + fieldName+".",openAlert:true})
            return;
        }

        if(!domainClientIDMap.has(domain))
        {
            this.setState({errorMsg: "Please select valid domain.",openAlert:true})
            return;
        }
        else
        {
            clientID = domainClientIDMap.get(domain);
        }
        const request = domain + "/oauth/v2/auth?client_id="+clientID+"&response_type=token&scope="+scope+"&redirect_uri="+redirectURI;

        window.open(request);

    }

    render()
    {
        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">
                    OAuth Generator
                </h1>
                <Card variant="elevation">
                     <CssCardContent>
                         <Collapse in={this.state.openAlert}>
                             <Alert
                                 severity="error"
                                 action={
                                     <IconButton
                                         aria-label="close"
                                         color="inherit"
                                         size="small"
                                         onClick={() => {
                                             this.setState({openAlert:false})
                                         }}
                                     >
                                         <CloseIcon fontSize="inherit" />
                                     </IconButton>
                                 }
                             >
                                 {this.state.errorMsg}
                             </Alert>
                          </Collapse>
                            <form  noValidate autoComplete="off">
                                <CssTextField
                                    id="domain-url"
                                    select
                                    label="Domain URl"
                                    value = {this.state.domainURL}
                                    helperText="Domain for which access token need to be generated"
                                    variant="outlined"
                                    onChange={e => this.setState({ domainURL : e.target.value })}
                                >
                                    {domains.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CssTextField>
                                <div/>

                                <CssTextField
                                    id="service-scope"
                                    label="Service Scope"
                                    variant="outlined"
                                    placeholder="i.e ZohoSubscriptions.fullaccess.all"
                                    onChange={e => this.setState({ scope : e.target.value })}
                                />
                            </form>
                            <CustomizedButton onClick={this.generateAccessToken.bind(this)} content="Generate Access token"/>
                        </CssCardContent>
                </Card>
            </header>
        </div>
        );
    }
}
export default InputCardComponent;


