import React, {
    Component
} from 'react';
import LoginButton from '../routes/login-button/LoginButton';
import Ooops from '../routes/ooops/Ooops';
import Location from '../../modules/Location';

export default class IframeRouter extends Component {
    state = {};
    routes = ['signin', 'login-button/success', 'ooops'];
    getRouteFromUrl() {
        const url = Location.getPathName();
        const route = this.routes.find(e => {
            const re = new RegExp(`^${e}`);
            return re.test(url);
        });
        return route;
    }

    calculateRoute = () => {
        this.setState({
            route: this.getRoute()
        });
    };

    getRoute() {
        return this.getRouteFromUrl() || this.routes[0];
    }

    componentDidMount() {
        window.onpopstate = () => {
            this.calculateRoute();
        };
        this.calculateRoute();
    }

    render() {
        const identityException = Location.getUrlParam('identity_exception');
        const oauthException = Location.getUrlParam('oauth_exception');
        const exceptionDetails = Location.getUrlParam('exception_details');

        switch (this.state.route) {
            case 'login-button/success':
                return <LoginButton / > ;

            case 'ooops':
                return ( <
                    Ooops flow = "button"
                    identityException = {
                        identityException
                    }
                    oauthException = {
                        oauthException
                    }
                    exceptionDetails = {
                        exceptionDetails
                    }
                    />
                );

            case 'signin':
                const error = {};
                error.identity_exception = identityException || 'unauthorized';
                if (exceptionDetails) {
                    error.exception_details = exceptionDetails;
                }

                if (error.identity_exception === 'identity_lost') {
                    Location.sendPostMessage({
                        signed_out: true
                    });
                } else {
                    Location.sendPostMessage({
                        error
                    });
                }
                break;

            default:
                return null;
        }

        return null;
    }
}