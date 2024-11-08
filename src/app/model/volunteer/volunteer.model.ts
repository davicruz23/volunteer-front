import { Organization } from "../organization/organization.model"
import { HasId } from "../upsert-content.model";

export class Volunteer extends HasId{
    name: String;
    email: String;
    password: String;
    dateJoined: String;
    skills: String[];
    location: String;
    availability: String;
    organizations: Organization[];
    applications: Application[];
    apportunities: Opportunity[];

    constructor(
        name: String = '',
        email: String = '',
        password: String = '',
        dateJoined: String = '',
        skills: String[]= [],
        location: String = '',
        availability: String = '',
        organizations: Organization[] = [],
        applications: Application[] = [],
        opportunities: Opportunity[] = [],
        id: number = 0
    ){
        super();

        this.id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateJoined = dateJoined;
        this.skills = skills;
        this.location = location;
        this.availability = availability;
        this.organizations = organizations;
        this.applications = applications;
        this.apportunities = opportunities;
    }
}