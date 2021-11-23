import React, {
    Component
} from 'react';
import Location from '../../../modules/Location';

export default class LoginButton extends Component {
    componentDidMount() {
        if (this.conditionsPassed()) {
            if (Location.getUrlParam('code')) {
                Location.sendPostMessage({
                    data: {
                        code: Location.getUrlParam('code'),
                        state: Location.getUrlParam('state')
                    }
                });
            } else {
                Location.sendPostMessage({
                    data: {
                        access_token: Location.getHashParam('access_token'),
                        scopes: Location.getHashParam('scope'),
                        expires_in: Location.getHashParam('expires_in'),
                        state: Location.getHashParam('state'),
                        token_type: Location.getHashParam('token_type')
                    }
                });
            }
        }
    }

    conditionsPassed() {
        return Location.isInLoginButtonPopup() || Location.isInLoginButtonIframe();
    }

    render() {
        if (!this.conditionsPassed()) {
            return <div > You cannot open this page directly. < /div>;
        }

        return null;
    }
}