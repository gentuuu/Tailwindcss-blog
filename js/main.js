$(document).ready(function() {
    $("#contact-from").submit(function (e) {
        e.preventDefault();
        var phone = $("input[name=phone]").val();
        var email = $("input[name=email]").val();
        var action = $("input[name=action]").val();
        var message = $("textarea[name=message]").val();

        $.ajax({
            url: '/',
            method: 'POST',
            data: {message: message, phone: phone, email: email,action,action},
            success: function (response) {
                if (response == 1) {
                    // $("#success").show();
                    $("#success").addClass('open');
                    setTimeout(function () {
                        $("#success").removeClass('open');
                    }, 3000)
                } else {
                    $("#error").addClass('open');
                    setTimeout(function () {
                        $("#error").removeClass('open');
                    }, 3000)
                }
            }
        });
    });

    // privacy show
    $("input[name='privacy-check']").click(function(){
        $("#privacy-text").toggle(100);
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });
});