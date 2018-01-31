$(function () {
    submitBtn = $('#submit');
    submitBtn.click(function () {
        const inputSelector = $(':input');
        const account = inputSelector[0].value;
        const password = inputSelector[1].value;
        const remember = $(':input:checked').length;
        $.ajax({
            url: '/posy',
            data: JSON.stringify({
                account: account,
                password: password,
                remember: remember
            }),
            type: 'POST',
            cache: false,
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            success: function (data) {
                alert('success=>' + data);
            },
            error: function () {
                alert('error');
            }
        });
    })
});
