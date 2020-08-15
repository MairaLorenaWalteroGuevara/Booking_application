import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminpagePage } from './adminpage.page';

describe('AdminpagePage', () => {
  let component: AdminpagePage;
  let fixture: ComponentFixture<AdminpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
