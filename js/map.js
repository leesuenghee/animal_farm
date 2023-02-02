

let tabMenus = $('#tabs .map_submenu a');

tabMenus.click(function(e){
  e.preventDefault();
  tabMenus.removeClass('active');
  $(this).addClass('active');
});
