$(function() {
    country = $.url(location.href).param('country');

    if (country == 'PL') {
        pl_selected = 'selected="selected"';
    } else {
        pl_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="PL" ' + pl_selected + '>Poland</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'PL';
            }

            if (sel == 'PL') {
                $('.old_price_val').html('338');
                $('.old_price_cur').html('zl');
                $('.old_price_sig').html('zl');
                $('.new_price_val').html('169');
                $('.new_price_cur').html('zl');
                $('.new_price_sig').html('zl');
                $('select').val('PL').trigger('change');
                initializeMask({ mask: "(+48)999999999", removeMaskOnSubmit: true, placeholder: ' ' })
            }

            change = 0;
        };
    $("select").change(function() {

        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
});