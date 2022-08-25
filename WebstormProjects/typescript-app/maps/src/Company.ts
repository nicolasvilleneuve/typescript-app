import { faker } from "@faker-js/faker";
import {Mappable} from "./Map";

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lng: number;
        lat: number;
    }
    color: string;

    constructor(name) {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent(): string {
        return `
        <div>
        <h1>Username: ${this.companyName}</h1>
        <h2>Catchphrase: ${this.catchPhrase}</h2>
        </div>`
    };
}