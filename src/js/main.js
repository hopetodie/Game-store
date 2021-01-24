document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('body').style.opacity = '1'
})

$('ul.game-tabs__caption').on('click', 'li:not(.game-tabs__tab_active)', function () {
    $(this)
      .addClass('game-tabs__tab_active').siblings().removeClass('game-tabs__tab_active')
      .closest('div.game-tabs__tabs').find('div.game-tabs__content').removeClass('game-tabs__content_active').eq($(this).index()).addClass('game-tabs__content_active');
  });
$('ul.page__caption').on('click', 'li:not(.page__str_active)', function () {
    $(this)
      .addClass('page__str_active').siblings().removeClass('page__str_active')
      .closest('div.game-tabs__tabs').find('div.page__content').removeClass('page__content_active').eq($(this).index()).addClass('page__content_active');
  });