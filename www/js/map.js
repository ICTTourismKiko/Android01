document.addEventListener('init', function(event) {
    var page = event.target;
    if(page.id == "map") {
        var mapOptions = {
            center: new google.maps.LatLng(41.677503, 140.435202),    //地図上で表示させる緯度経度
            zoom: 14,                                                 //地図の倍率
            mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
        };
            
        var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    }
});