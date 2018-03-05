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

    // Validating dates and destination before submitting
    $("#submit-form").on("click", function () {
        var departureDate = $("#departure").val();
        var returningDate = $("#returning").val();
        var destinationVal = $("#form-destination").val();
        if (departureDate === "" || returningDate === "") {
            alert("Choose departure and returning dates and try again.");
        } else if (returningDate <= departureDate) {
            alert("Returning date must be at least 1 day after departure date.");
        } else if (destinationVal === "") {
            alert("Choose your destination and try again.");
        } else if (availableDestinations.some(function (element) {
                return element === destinationVal;
            }) === false) {
            alert("This is not a valid destination. Please try again.");
        } else {
            alert("Thank you! Your order has been submitted.");
        }
    });
});


