var BookBin = {
    serverBaseUrl: "http://localhost",
    DoesNotSupportBrowser: function () {
        $.notify("Sorry, we don't support your browser. Please try latest browser.", { className: "error", globalPosition: "top right" });
    },
    Key_MyBook: "MyBook",
    ValidateForm: function () {
        var errors = [];
        $("input.ng-invalid").each(function () {
            if ($(this).hasClass("ng-invalid-number") && $(this).hasClass("ng-invalid-required")) {
                errors.push("<strong>" + $(this).attr("placeholder") + "</strong>: Required & should be number.")
            }
            else if ($(this).hasClass("ng-invalid-number")) {
                errors.push("<strong>" + $(this).attr("placeholder") + "</strong>: Should be number.")
            }
            else if ($(this).hasClass("ng-invalid-required")) {
                errors.push("<strong>" + $(this).attr("placeholder") + "</strong>: Required.")
            }
        });

        if (errors.length > 0) {
            $("#error").html(errors.join("<br/>")).removeClass("hidden").addClass("show");
        }
        else {
            $("#error").removeClass("show").addClass("hidden");
        }
    }
}