import { faker } from "@faker-js/faker";
import {Mappable} from "./Map";

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    constructor(name) {
        this.name = faker.name.firstName('male');
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `<h1>Username: ${this.name}</h1>`
    };
}

