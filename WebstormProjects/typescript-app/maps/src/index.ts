/// <reference types="@types/google.maps" />
import {User} from "./User";
import {Company} from "./Company";

// const nic = new User();
// console.log(nic);
//
// const company = new Company();
// console.log(company);


new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom: 1,
    center: {
        lat: -34.397, lng: 150.644
    }
});

