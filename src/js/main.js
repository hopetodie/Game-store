document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('body').style.opacity = '1'
})

$('ul.game-tabs__caption').on('click', 'li:not(.game-tabs__tab_active)', function () {
    $(this)
      .addClass('game-tabs__tab_active').siblings().removeClass('game-tabs__tab_active')
      .closest('div.game-tabs__tabs').find('div.game-tabs__content').removeClass('game-tabs__content_active').eq($(this).index()).addClass('game-tabs__content_active');
  });