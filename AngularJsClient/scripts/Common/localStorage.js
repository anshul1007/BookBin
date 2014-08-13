$(document).ready(function () {
    var Books = [{
        BookID: 1,
        Name: "B1"
    },
       {
           BookID: 2,
           Name: "B2"
       }]
    LocalStorage.SetJSONData(BookBin.LS_MyBook, Books);
});

var LocalStorage = {
    RemoveData: function (key) {
        localStorage[key] = null;
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



