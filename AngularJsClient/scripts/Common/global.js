var BookBin = {
    serverBaseUrl: "http://localhost",
    DoesNotSupportBrowser: function () {
        $.notify("Sorry, we don't support your browser. Please try latest browser.", { className: "error", globalPosition: "top right" });
    },
    LS_MyBook: "MyBook"
}