$(function (){
    isDropDownSearchHidden = true;
   $('body > header > div > nav:nth-child(3) .input-group-prepend').click(function (){
       if(isDropDownSearchHidden){
           $('body > header > div > nav:nth-child(3) .drop_downl_search').show();
           isDropDownSearchHidden = false;
       }
        else{
            $('body > header > div > nav:nth-child(3) .drop_downl_search').hide();
            isDropDownSearchHidden = true;   
        }
   });
   
   
   isNabBarOneHidden = true;
   navBarHeight = $('body > header > div > nav:nth-child(1)').height();
   $('body > header > div > nav:nth-child(1) .mobile_navs img').click(function (){
       if(isNabBarOneHidden){
           $('body > header > div > nav:nth-child(1) .item').show();
           isNabBarOneHidden = false;
       }
        else{
            $('body > header > div > nav:nth-child(1) .item').hide();
            isNabBarOneHidden = true;   
        }
   });
   
   isNabBarTwoHidden = true;
   $('body > header > div > nav:nth-child(2) .mobile_navs .menu_icon').click(function (){
       if(isNabBarTwoHidden){
           $('body > header > div > nav:nth-child(2) > div .item').show();
           $('body > header > div > nav:nth-child(3)').show();
           isNabBarTwoHidden = false;
       }
        else{
            $('body > header > div > nav:nth-child(2) > div .item').hide();
            $('body > header > div > nav:nth-child(3)').hide();
            isNabBarTwoHidden = true;   
        }
   });
   
   $('body > header > div > nav:nth-child(2) .mobile_navs .search_icon').click(function (){
      $('body > header > div > nav:nth-child(3)').fadeIn(700); 
   });
   
   $('body > header > div > nav:nth-child(3) .exit_icon').click(function (){
      $('body > header > div > nav:nth-child(3)').fadeOut(700); 
   });
});