import { Organization } from "../organization/organization.model";
import { HasId } from "../upsert-content.model"
import { Volunteer } from "../volunteer/volunteer.model";

export class Opportunity extends HasId{
    title: String;
    description: String;
    requirements: String;
    location: String;
    startDate: String;
    endDate: String;
    isActive: Boolean;
    volunteers: Volunteer[];
    organization: Organization;

    constructor(
        title: String,
        description: String,
        requirements: String,
        location: String,
        startDate: String,
        endDate: String,
        isActive: Boolean,
        volunteers: Volunteer[] = [],
        organization: Organization,
        id: number = 0
    ){
        super();

        this.id = id;
        this.title = title;
        this.description = description;
        this.requirements = requirements;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isActive = isActive;
        this.volunteers = volunteers;
        this.organization = organization;

    }
}