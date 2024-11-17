import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksDetailsComponent } from './stocks-details.component';
import { provideHttpClient } from '@angular/common/http';

describe('StocksDetailsComponent', () => {
  let component: StocksDetailsComponent;
  let fixture: ComponentFixture<StocksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksDetailsComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(StocksDetailsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('stockSymbol', 'AAPL');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the statistic', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');
    expect(h1).toBeTruthy();
    const statistics = compiled.querySelectorAll('nz-statistic');
    expect(statistics.length).toEqual(4);
  });
});
