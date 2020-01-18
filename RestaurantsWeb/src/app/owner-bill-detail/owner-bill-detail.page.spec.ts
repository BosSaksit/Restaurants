import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerBillDetailPage } from './owner-bill-detail.page';

describe('OwnerBillDetailPage', () => {
  let component: OwnerBillDetailPage;
  let fixture: ComponentFixture<OwnerBillDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerBillDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerBillDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
