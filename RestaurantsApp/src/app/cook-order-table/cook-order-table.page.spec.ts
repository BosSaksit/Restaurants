import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CookOrderTablePage } from './cook-order-table.page';

describe('CookOrderTablePage', () => {
  let component: CookOrderTablePage;
  let fixture: ComponentFixture<CookOrderTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookOrderTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CookOrderTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
