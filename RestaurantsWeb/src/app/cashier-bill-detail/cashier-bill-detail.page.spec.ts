import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashierBillDetailPage } from './cashier-bill-detail.page';

describe('CashierBillDetailPage', () => {
  let component: CashierBillDetailPage;
  let fixture: ComponentFixture<CashierBillDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierBillDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashierBillDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
