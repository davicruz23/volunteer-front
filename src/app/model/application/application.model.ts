import { HasId } from "../upsert-content.model";
import { Volunteer } from "../volunteer/volunteer.model";
import { Opportunity } from "../opportunity/opportunity.model";

export class Application extends HasId{
    statusId: number;
    applicationDate: String;
    volunteerFeedback: String;
    volunteer: Volunteer;
    opportunity: Opportunity;

    constructor(
        statusId: number,
        applicationDate: String,
        volunteerFeedback: String,
        volunteer: Volunteer,
        opportunity: Opportunity,
        id: number = 0
    ){
        super();

        this.id;
        this.statusId = statusId;
        this.applicationDate = applicationDate;
        this.volunteerFeedback = volunteerFeedback;
        this.opportunity = opportunity;
        this.volunteer = volunteer;
    }

}