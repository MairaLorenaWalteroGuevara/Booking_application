import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowclientPage } from './showclient.page';

describe('ShowclientPage', () => {
  let component: ShowclientPage;
  let fixture: ComponentFixture<ShowclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowclientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
