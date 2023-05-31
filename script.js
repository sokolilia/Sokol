navigator.geolocation.getCurrentPosition(function(position) {
    coords = position.coords;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let path = "https://www.openstreetmap.org/#map=18/" + latitude + "/" + longitude + "/"

    let link = document.querySelector('.link');
    link.innerHTML = "<a href='"+ path + "'>Посмотреть местоположение</a>";
    });


let map = new ol.Map({
    target: 'map',
    layers: [

        new ol.layer.Tile({
            sourse: new ol.sourse.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([37.41,8.82]),
        zoom:10
    })

});