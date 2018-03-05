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
    $("#arriving").datepicker();
    $("#leaving").datepicker();

    // Validating dates before submitting
    $("#submit-form").on("click", function () {
        var arrivingDate = $("#arriving").val();
        var leavingDate = $("#leaving").val();
        if (leavingDate === "" || arrivingDate === "") {
            alert("Choose arriving and leaving dates and try again.");
        } else if (leavingDate <= arrivingDate) {
            alert("Leaving date must be at least 1 day after arriving date.");
        } else {
            alert("Thank you! Your order has been submitted.");
        }
    });
});


