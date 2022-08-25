/// <reference types="@types/google.maps" />
import {User} from "./User";
import {Company} from "./Company";
import {CustomMap} from "./Map";

const nic = new User('nic');
console.log(nic);

const company = new Company('dynatrace');
console.log(company);

const customMap = new CustomMap('map');
customMap.addMarker(nic);
customMap.addMarker(company);


