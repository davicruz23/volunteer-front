import { HasId } from "../upsert-content.model";
import { Volunteer } from "../volunteer/volunteer.model";
import { Opportunity } from "../opportunity/opportunity.model";

export class Organization extends HasId{
    name: String;
    description: String;
    contactEmail: String;
    contactPhone: String;
    location: String;
    webSite: String;
    volunteers: Volunteer[];
    opportunities: Opportunity[];

    constructor(
        name: String,
        description: String,
        contactEmail: String,
        contactPhone: String,
        location: String,
        webSite: String,
        volunteers: Volunteer[] = [],
        opportunities: Opportunity[] = [],
        id: number = 0

    ){
        super();

        this.id;
        this.name = name;
        this.description = description;
        this.contactEmail = contactEmail;
        this.contactPhone = contactPhone;
        this.location = location;
        this.webSite = webSite;
        this.volunteers = volunteers;
        this.opportunities = opportunities;

    }
}