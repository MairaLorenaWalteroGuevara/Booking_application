import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientpagePage } from './clientpage.page';

describe('ClientpagePage', () => {
  let component: ClientpagePage;
  let fixture: ComponentFixture<ClientpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
