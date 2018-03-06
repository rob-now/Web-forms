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
        var radioChecked = $("input[name=single-choice-age]:checked").val();
        var departureDate = $("#departure").val();
        var returningDate = $("#returning").val();
        var destinationVal = $("#form-destination").val();

        // Validating age
        if (!radioChecked) { // When no option is selected
            console.log("You have to select your age.");
        } else if (radioChecked == "Under 18") {
            console.log("You selected '" + radioChecked + "'. You may not place the order.");
        } else {
            console.log("You selected '" + radioChecked + "'. You may place the order.");
        }

        // Validating dates and destination
        if (departureDate === "" || returningDate === "") {
            console.log("Choose departure and returning dates and try again.");
        } else if (returningDate <= departureDate) {
            console.log("Returning date must be at least 1 day after departure date.");
        } else if (destinationVal === "") {
            console.log("Choose your destination and try again.");
        } else if (availableDestinations.some(function (element) {
                return element === destinationVal;
            }) === false) {
            console.log("This is not a valid destination. Please try again.");
        } else {
            console.log("Thank you! Your order has been submitted.");
        }

    });
});


