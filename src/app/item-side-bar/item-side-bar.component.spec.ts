import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSideBarComponent } from './item-side-bar.component';

describe('ItemSideBarComponent', () => {
  let component: ItemSideBarComponent;
  let fixture: ComponentFixture<ItemSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
