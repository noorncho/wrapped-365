import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../../assets/js/spotifyAuth';
import { withRouter } from 'react-router-dom';

class RedirectPage extends React.Component {
    componentDidMount(){
        const{setExpiryTime, /*history,*/ location} = this.props;
        try{
            if(_.isEmpty(location.hash)){
                return this.props.history.push("/dashboard");
            }
            const access_token = getParamValues(location.hash);
            const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
            localStorage.setItem('params', JSON.stringify(access_token));
            localStorage.setItem('expiry_time', expiryTime);
            setExpiryTime(expiryTime);
            this.props.history.push('/dashboard');
        } catch(error){
            this.props.history.push('/');
        }
    }
    render(){
        return null;
    }
    /*return (
        <div>
            Redirect Page
        </div>
    )*/
}

export default withRouter(RedirectPage);
