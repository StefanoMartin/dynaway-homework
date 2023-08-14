import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { HomePage } from './home.page'
import { fakeAsync, tick } from '@angular/core/testing';
import { AssetService } from '../shared/services/asset.service';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { of, throwError } from 'rxjs';
import { Asset } from '../shared/models/asset.model';

describe('HomePage', () => {
  let component: HomePage
  let fixture: ComponentFixture<HomePage>
  let service: AssetService
  const mockAsset : Asset[] = [
    {
      id: '31a92936eed7',
      type: 'Motor-DC',
      name: 'DCM-201 Motor for EX-201',
      locationId: 'CPH-03',
      locationName: 'Production line',
      image: '',
    }
  ]

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage, AssetCardComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(HomePage)
    component = fixture.componentInstance
    fixture.detectChanges()
    service = TestBed.inject(AssetService);
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the assets if successful', fakeAsync(() => {
    expect(component.assets).toHaveSize(6);
    expect(component.isToastOpen).toEqual(false);

    spyOn(service, 'getAll').and.returnValue(of({ ok: true, data: mockAsset }));

    component.ionViewWillEnter();

    tick(2000);

    expect(component.assets.length).toBe(1)
    expect(component.isToastOpen).toEqual(false);
  }))

  it('should not display the assets if not successful', fakeAsync(() => {
    expect(component.assets).toHaveSize(6);
    expect(component.isToastOpen).toEqual(false);

    spyOn(service, 'getAll').and.returnValue(throwError(() => new Error('Error')));

    component.ionViewWillEnter();

    tick(2000);

    expect(component.assets.length).toBe(0)
    expect(component.isToastOpen).toEqual(true);
  }))
})
