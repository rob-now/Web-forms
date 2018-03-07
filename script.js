// Setting up Polish locale for datepicker widget
$.datepicker.regional['pl'] = {
    monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
        'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze',
        'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    dayNames: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
    dayNamesShort: ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'],
    dayNamesMin: ['Po', 'Wt', 'Śr', 'Cz', 'Pi', 'So', 'Ni'],
    firstDay: 0,
    dateFormat: "d MM yy"
};
$.datepicker.setDefaults($.datepicker.regional['pl']);

$(document).ready(function () {
    // Assigning datepicker to appropriate input's
    $("#departure").datepicker();
    $("#returning").datepicker();

    var availableDestinations = [
        "Gdańsk",
        "Warsaw",
        "Kraków",
        "Berlin",
        "London",
        "Paris",
        "Oslo",
        "Madrid",
        "Rome",
        "Moscow",
        "New York",
        "Chicago",
        "Sydney"
    ];
    $("#form-destination").autocomplete({
        source: availableDestinations
    });

    // Validating before submitting
    $("#submit-form").on("click", function () {
        // Variables declaration
        var radioChecked = $("input[name=single-choice-age]:checked").val();
        var departureDate = $("#departure").val();
        var returningDate = $("#returning").val();
        var destinationVal = $("#form-destination").val();
        var detachMessage = $("#submit-message").children("p").detach();

        // Function for error message
        function errorMessage(message) {
            detachMessage;
            return $("#submit-message").append("<p>" + message + "</p>").addClass("message-error").fadeIn("fast");
        }

        // Function for validation success
        function successMessage(message) {
            detachMessage;
            return $("#submit-message").append("<p>" + message + "</p>").addClass("message-success").fadeIn("fast");
        }

        // Validating age
        if (!radioChecked) { // When no option is selected
            errorMessage("You have to select your age.");
        } else if (radioChecked === "Under 18") {
            errorMessage("You selected '" + radioChecked + "'. You may not place the order.");
        }
        // Validating dates and destination
        else if (departureDate === "" || returningDate === "") {
            errorMessage("Choose departure and returning dates and try again.");
            $("#departure").addClass("highlighted");
            $("#returning").addClass("highlighted");
        } else if (returningDate <= departureDate) {
            errorMessage("Returning date must be at least 1 day after departure date.");
        } else if (destinationVal === "") {
            errorMessage("Choose your destination and try again.");
        } else if (availableDestinations.some(function (element) {
                return element === destinationVal;
            }) === false) {
            errorMessage("This is not a valid destination. Please try again.");
        }
        // When all above conditions are false
        else {
            successMessage("Thank you! Your order has been submitted.");
        }
    });
});

// ++ 1. Usunac message po ponownym kliknięciu submit
// 2. Podświetlić pole do ktorego odnosi sie error message
// 3. Usunac podwietlenie z pol po ponownym kliknieciu submit

