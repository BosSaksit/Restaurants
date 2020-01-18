import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerAddFoodPage } from './owner-add-food.page';

describe('OwnerAddFoodPage', () => {
  let component: OwnerAddFoodPage;
  let fixture: ComponentFixture<OwnerAddFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAddFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerAddFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
