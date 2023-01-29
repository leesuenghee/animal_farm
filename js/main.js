let aside = $('header .aside'),
    button = $('header .toggleBtn');

    button.click(function(){
        aside.toggleClass('open');
        $(this).toggleClass('active');
    });