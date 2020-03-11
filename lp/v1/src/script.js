$(document).ready(function () {



    $('.form-link').click(function () {
        $('html, body').animate({scrollTop: $('.form-block-bottom').offset().top}, 600);
        return false;
    });
    $('.confident-link').click(function () {
        $('.hidden-conf').show();
        if ($(window).height() < 760) {
            $('.conf-info').css({
                'height': ($(window).height() - 120),
                'overflow-y': 'scroll'
            });
        }
        ;
    });
    $('.close-conf').click(function () {
        $('.hidden-conf').hide();
    });
    if ($('select').length) {
    } else {
        $('.c-s').css({'display': 'none'})
    }

    $('.more-link').click(function () {
        $('.block9 .item4').show();
        $('.block9 .item5').show();
        $('.block9 .item6').show();
        $('.block9 .back-link').show();
        $('.block9 .more-link').hide();

        return false;
    });

    $('.back-link').click(function () {
        $('.block9 .item4').hide();
        $('.block9 .item5').hide();
        $('.block9 .item6').hide();
        $('.block9 .back-link').hide();
        $('.block9 .more-link').show();

        return false;
    });

    $('.calc-form input').change(function () {
        calc();
    });

    $('.calc-form input').keyup(function () {
        calc();
    });




    $('a').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
        return false;
    });

    initializeClock('timer1', deadline);
    initializeClock('timer2', deadline);
});




function calc() {
    var age = $('.calc-form .inp1').val();
    var height2 = $('.calc-form .inp2').val();
    var weight2 = $('.calc-form .inp3').val();

    age = parseInt(age.replace(/\D+/g, ""));
    height2 = parseInt(height2.replace(/\D+/g, ""));
    weight2 = parseInt(weight2.replace(/\D+/g, ""));

    console.log(age);

    if (age > 0 && height2 > 0 && weight2 > 0) {
        if (weight2 < 55) {
            $('.calc-form .line1').attr('style', 'visibility: display;');
            $('.calc-form .line2').attr('style', 'visibility: display;');
            $('.calc-form .line1').html('<span class="green">У вас нормальный вес</span>');
            $('.calc-form .line2').html('Но если вы склонны к полноте остерегайтесь последствий!');
        } else {
            if (weight2 >= 55 && weight2 < 70) {
                $('.calc-form .line1').attr('style', 'visibility: display;');
                $('.calc-form .line2').attr('style', 'visibility: display;');
                $('.calc-form .line1').html('Ожирение<br>1-й степени');
                $('.calc-form .line2').html('Немедленно начните лечение!');
            } else {
                if (weight2 >= 70 && weight2 < 80) {
                    $('.calc-form .line1').attr('style', 'visibility: display;');
                    $('.calc-form .line2').attr('style', 'visibility: display;');
                    $('.calc-form .line1').html('Ожирение<br>2-й степени');
                    $('.calc-form .line2').html('Немедленно начните лечение!');
                } else {
                    if (weight2 >= 80) {
                        $('.calc-form .line1').attr('style', 'visibility: display;');
                        $('.calc-form .line2').attr('style', 'visibility: display;');
                        $('.calc-form .line1').html('Ожирение<br>3-й степени');
                        $('.calc-form .line2').html('Немедленно начните лечение!');
                    }
                }
            }
        }
    }

}



function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function lastpack(last) {
    var lastclass = $('.big');
    if (last > 4) {
        document.cookie = "lastpack=" + last;
        lastclass.html(last);
        last--;
        setTimeout(lastpack, 45000, last);
    } else {
        lastclass.html(last);
    }
}

$(document).ready(function () {
    var lastpackcookie = getCookie("lastpack");
    if (lastpackcookie == undefined) {
        document.cookie = "lastpack=136";
        lastpack(136);
    } else {
        lastpack(lastpackcookie);
    }
});