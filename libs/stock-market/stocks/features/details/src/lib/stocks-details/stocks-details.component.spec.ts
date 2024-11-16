import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksFeaturesDetailsComponent } from './stocks-details.component';

describe('StocksFeaturesDetailsComponent', () => {
  let component: StocksFeaturesDetailsComponent;
  let fixture: ComponentFixture<StocksFeaturesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksFeaturesDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StocksFeaturesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
