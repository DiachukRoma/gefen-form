$(document).ready(function () {
    $('.btnStepNext').click(function () {
        let step = parseInt($('.prBarSteps.active').data('step'));

        $('.prBarSteps.active').addClass('success').removeClass('active');
        $(`.prBarSteps[data-step="${step + 1}"]`).addClass('active');

        $('.singleSect').removeClass('select');
        $(`.step__${step + 1}`).addClass('select');
        zeroSelect();
    });

    $('.btnStepPrev').click(function () {
        let step = parseInt($('.prBarSteps.active').data('step'));

        $('.prBarSteps.active').removeClass('active');
        $(`.prBarSteps[data-step="${step - 1}"]`).removeClass('success').addClass('active');

        $('.singleSect').removeClass('select');
        $(`.step__${step - 1}`).addClass('select');
        zeroSelect();
    });

    function zeroSelect() {
        $('.singleSect.step__0').is('.select') ? $('.progressBar').hide() : $('.progressBar').show();
        $('.singleSect.step__0').is('.select') ? $('.btnStepPrev').removeClass('show') : $('.btnStepPrev').addClass('show');
        $('.singleSect.step__4').is('.select') ? $('.btnStepNext button').addClass('success').html('סיום') : $('.btnStepNext button').removeClass('success').html('המשך');
        $('.singleSect.step__5').is('.select') ? $('.btnStepNext, .btnStepPrev').removeClass('show') : $('.btnStepNext, .btnStepPrev').addClass('show');
    }
    zeroSelect();

    $('.toggleList').click(function () {
        if (!$(this).is('.active')) {
            $(`#${$(this).parents('ul').attr('id')} .description`).slideUp();
            $(`#${$(this).parents('ul').attr('id')} .toggleList`).removeClass('active');
            $(this).addClass('active');
            $(this).next().slideDown();            
        }
    });

});