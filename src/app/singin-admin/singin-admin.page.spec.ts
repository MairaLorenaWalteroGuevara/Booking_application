import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinginAdminPage } from './singin-admin.page';

describe('SinginAdminPage', () => {
  let component: SinginAdminPage;
  let fixture: ComponentFixture<SinginAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinginAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinginAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
