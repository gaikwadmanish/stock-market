import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksFeaturesSearchComponent } from './stocks-search.component';

describe('StocksFeaturesSearchComponent', () => {
  let component: StocksFeaturesSearchComponent;
  let fixture: ComponentFixture<StocksFeaturesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksFeaturesSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StocksFeaturesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
