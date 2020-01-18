import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderReceivePage } from './order-receive.page';

describe('OrderReceivePage', () => {
  let component: OrderReceivePage;
  let fixture: ComponentFixture<OrderReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReceivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
