$(function(){
  // 头部搜索框 点击事件
  $('.show_search').on('click',function(){
    $(this).hide();
    $('.wap_header_box').addClass('add_border');
    $('.icon_logo').hide();
    $('.icon_search').hide();
    $('.login').hide();
    $('#form_search').addClass('form_search');
    $('#form_search .hide_search').show();
    $('.close_search').show();
    $('.search_submit').show();
    $('#header_hot').show();
  })

  $('.close_search').on('click',function(){
    $(this).hide().siblings('.search_submit,.hide_search').hide().siblings('.show_search,.icon_search').show().parent('form').removeClass('form_search');
    $('.wap_header_box').removeClass('add_border');
    $('.icon_logo').show();
    $('.icon_search').show();
    $('.login').show();
    $('#header_hot').hide();
  })

})

  
