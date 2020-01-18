import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerEditUserPage } from './owner-edit-user.page';

describe('OwnerEditUserPage', () => {
  let component: OwnerEditUserPage;
  let fixture: ComponentFixture<OwnerEditUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerEditUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerEditUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
