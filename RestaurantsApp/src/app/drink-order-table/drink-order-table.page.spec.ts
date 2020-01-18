import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrinkOrderTablePage } from './drink-order-table.page';

describe('DrinkOrderTablePage', () => {
  let component: DrinkOrderTablePage;
  let fixture: ComponentFixture<DrinkOrderTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkOrderTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkOrderTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
