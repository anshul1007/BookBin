var LocalStorage = {
    IsExist: function (key) {
        if (Modernizr.localstorage) {
            return (typeof localStorage[key] !== 'undefined');
        } else {
            BookBin.DoesNotSupportBrowser();
        }
    },

    RemoveData: function (key) {
        localStorage.removeItem(key);
    },

    SetData: function (key, data) {
        if (Modernizr.localstorage) {
            localStorage[key] = data;
        } else {
            BookBin.DoesNotSupportBrowser();
        }
    },

    GetData: function (key) {
        if (Modernizr.localstorage) {
            return localStorage[key];
        }
        else {
            BookBin.DoesNotSupportBrowser();
        }
    },

    SetJSONData: function SetJSONData(key, data) {
        if (Modernizr.localstorage) {
            localStorage[key] = JSON.stringify(data);
        } else {
            BookBin.DoesNotSupportBrowser();
        }
    },

    GetJSONData: function (key) {
        if (Modernizr.localstorage) {
            return JSON.parse(localStorage[key]);
        }
        else {
            BookBin.DoesNotSupportBrowser();
        }
    }
}

var SessionStorage = {
    IsExist: function (key) {
        if (Modernizr.sessionstorage) {
            return (typeof sessionStorage[key] !== 'undefined');
        } else {
            BookBin.DoesNotSupportBrowser();
        }
    },

    RemoveData: function (key) {
        sessionStorage.removeItem(key);
    },

    SetData: function (key, data) {
        if (Modernizr.sessionstorage) {
            sessionStorage[key] = data;
        } else {
            BookBin.DoesNotSupportBrowser();
        }
    },

    GetData: function (key) {
        if (Modernizr.sessionstorage) {
            return sessionStorage[key];
        }
        else {
            BookBin.DoesNotSupportBrowser();
        }
    },

    SetJSONData: function SetJSONData(key, data) {
        if (Modernizr.sessionstorage) {
            sessionStorage[key] = JSON.stringify(data);
        } else {
            BookBin.DoesNotSupportBrowser();
        }
    },

    GetJSONData: function (key) {
        if (Modernizr.sessionstorage) {
            return JSON.parse(sessionStorage[key]);
        }
        else {
            BookBin.DoesNotSupportBrowser();
        }
    }
}

