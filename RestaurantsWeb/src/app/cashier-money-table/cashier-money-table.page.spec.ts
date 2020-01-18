import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashierMoneyTablePage } from './cashier-money-table.page';

describe('CashierMoneyTablePage', () => {
  let component: CashierMoneyTablePage;
  let fixture: ComponentFixture<CashierMoneyTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierMoneyTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashierMoneyTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
