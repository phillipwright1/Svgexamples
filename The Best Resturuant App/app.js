/**
 * Created by phillipwright on 8/31/14.
 */
var toggleMenu= function(elem){
    $("form")[0].reset();
    $('[id$="menu"]').hide();
    $("#"+elem.id+"menu").show();
    //console.log("#"+this.id+"menu");
};

