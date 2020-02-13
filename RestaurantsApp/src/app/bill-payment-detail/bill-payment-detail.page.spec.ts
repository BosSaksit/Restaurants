import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillPaymentDetailPage } from './bill-payment-detail.page';

describe('BillPaymentDetailPage', () => {
  let component: BillPaymentDetailPage;
  let fixture: ComponentFixture<BillPaymentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPaymentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillPaymentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
