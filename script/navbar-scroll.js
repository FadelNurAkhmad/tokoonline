$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    // mengecek apabila panjang scroll lebih dari heigt di page maka akan muncul fitur nya
  });
});
