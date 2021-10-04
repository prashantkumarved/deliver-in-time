var InfoObj = [];
let map;

function initMap() {
    const myLatLng = { lat: 12.930857, lng: 77.679111 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 19.5,
        center: myLatLng,
    });

    fetch("delivery_points.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(res) {
            let arr = Object.entries(res);
            let customerinfo = Object.entries(arr[0][1].customer_details);
            for (let i = 0; i < customerinfo.length; i++) {

                const infostring = '<h3>' + customerinfo[i].customer_name + '</h3>';
                const pos = {
                    lat: parseFloat(
                        customerinfo[i][1].customer_address["lat_long"]["latitude"]
                    ),
                    lng: parseFloat(
                        customerinfo[i][1].customer_address["lat_long"]["longitude"]
                    ),
                };
                let marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: "Hello World!",
                });

                // const infowindow = new google.maps.InfoWindow({
                //     content: contentString,
                // });

                // marker.addListener('click', function() {
                //     infowindow.open(map, marker);
                // });

                if (customerinfo[i][1].visited) {
                    marker.setIcon(
                        "delivered.svg"
                    );
                }
                console.log(customerinfo[i][1].visited);
            }
        });
}
//28.662522627238456, 76.79498993951997
// let request=new Request("delivery_points.json")
// fetch('delivery_points.json').then(function (resp) {
//   return resp.json();
// }).then(function (res) {

//   let arr = Object.entries(res);
//   let customerinfo = Object.entries(arr[0][1].customer_details);
//   for (let i = 0; i < customerinfo.length; i++) {
//     console.log(customerinfo[i][1].customer_address['lat_long']['latitude']);

//     //console.log(customerinfo[i][1].customer_address['lat_long']['latitude']);
//   }

// });