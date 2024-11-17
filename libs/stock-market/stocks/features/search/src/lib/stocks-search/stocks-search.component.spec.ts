import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksSearchComponent } from './stocks-search.component';
import { provideHttpClient } from '@angular/common/http';

describe('StocksSearchComponent', () => {
  let component: StocksSearchComponent;
  let fixture: ComponentFixture<StocksSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksSearchComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(StocksSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
