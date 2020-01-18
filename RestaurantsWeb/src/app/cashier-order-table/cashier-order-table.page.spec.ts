import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashierOrderTablePage } from './cashier-order-table.page';

describe('CashierOrderTablePage', () => {
  let component: CashierOrderTablePage;
  let fixture: ComponentFixture<CashierOrderTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierOrderTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashierOrderTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
