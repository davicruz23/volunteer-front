import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityComponent } from './opportunity.component';

describe('OpportunityComponent', () => {
  let component: OpportunityComponent;
  let fixture: ComponentFixture<OpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
