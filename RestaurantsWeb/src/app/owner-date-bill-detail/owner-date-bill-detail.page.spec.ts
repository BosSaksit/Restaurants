import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerDateBillDetailPage } from './owner-date-bill-detail.page';

describe('OwnerDateBillDetailPage', () => {
  let component: OwnerDateBillDetailPage;
  let fixture: ComponentFixture<OwnerDateBillDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerDateBillDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerDateBillDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
