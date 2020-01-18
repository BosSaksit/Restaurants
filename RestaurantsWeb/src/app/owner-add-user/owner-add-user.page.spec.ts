import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerAddUserPage } from './owner-add-user.page';

describe('OwnerAddUserPage', () => {
  let component: OwnerAddUserPage;
  let fixture: ComponentFixture<OwnerAddUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAddUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerAddUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
