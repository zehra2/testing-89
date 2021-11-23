class Utils {
    // returns true for all Internet Explorers
    isIE() {
        return 'ActiveXObject' in window;
    }

    // returns true for all Internet Explorers excluding Edge
    isOldIE() {
        return this.isIE() && !/Edge\/\d+/.test(navigator.userAgent);
    }

    isUsingAndroidApp() {
        return /LiveChat_Android_App/i.test(navigator.userAgent);
    }

    isUsingIOSApp() {
        return !!(window.webkit && window.webkit.messageHandlers.ios);
    }

    isUsingMobileApp() {
        return this.isUsingAndroidApp() || this.isUsingIOSApp();
    }

    submitPost = (url, params) => {
        const form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', url);

        Object.keys(params).forEach(key => {
            const hiddenField = document.createElement('input');
            hiddenField.setAttribute('type', 'hidden');
            hiddenField.setAttribute('name', key);
            hiddenField.setAttribute('value', params[key]);
            form.appendChild(hiddenField);
        });

        document.getElementById('root').appendChild(form);
        form.submit();
    };

    oauthQuery = (cfg = {}, opts = {}) => {
        const query = [];
        query.push(`client_id=${encodeURIComponent(cfg.client_id)}`);
        query.push(`redirect_uri=${encodeURIComponent(cfg.redirect_uri)}`);
        query.push(`response_type=${encodeURIComponent(cfg.response_type)}`);

        if (cfg.organization_id && opts.organization_id == null) {
            query.push(`organization_id=${encodeURIComponent(cfg.organization_id)}`);
        }

        if (cfg.flow) {
            query.push(`flow=${encodeURIComponent(cfg.flow)}`);
        }

        if (cfg.state) {
            query.push(`state=${encodeURIComponent(cfg.state)}`);
        }

        if (cfg.code_challenge) {
            query.push(`code_challenge=${encodeURIComponent(cfg.code_challenge)}`);
        }

        if (cfg.code_challenge_method) {
            query.push(`code_challenge_method=${encodeURIComponent(cfg.code_challenge_method)}`);
        }

        Object.keys(opts).forEach(key => {
            if (opts[key]) {
                query.push(`${key}=${encodeURIComponent(opts[key])}`);
            }
        });

        return query.join('&');
    };

    jsonp = (url, callbackName, callbackFunction) => {
        window[callbackName] = data => {
            callbackFunction(data);
            delete window[callbackName];
        };

        const script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    getRandomInt(min, max) {
        const minValue = Math.ceil(min);
        const maxValue = Math.floor(max);

        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }

    zeroPadding(value, size) {
        let output = `${value}`;
        while (output.length < size) {
            output = `0${output}`;
        }

        return output;
    }

    centsToDollars(value) {
        const output = parseInt(value / 100, 10);
        return `${output}.${this.zeroPadding(value % 100, 2)}`;
    }

    parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
            .split('')
            .map(c => {
                return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
            })
            .join('')
        );

        return JSON.parse(jsonPayload);
    }
}

export default new Utils();