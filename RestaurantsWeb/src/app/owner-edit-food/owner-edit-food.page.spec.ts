import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerEditFoodPage } from './owner-edit-food.page';

describe('OwnerEditFoodPage', () => {
  let component: OwnerEditFoodPage;
  let fixture: ComponentFixture<OwnerEditFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerEditFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerEditFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
