import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { AssetService } from '../shared/services/asset.service';
import { AssetDetailPage } from './asset-detail.page'
import { RouterTestingModule } from '@angular/router/testing'
import { Asset } from '../shared/models/asset.model';
import { of, throwError } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';

describe('AssetDetailPage', () => {
  let component: AssetDetailPage
  let fixture: ComponentFixture<AssetDetailPage>
  let service: AssetService
  const mockAsset : Asset = {
    id: '31a92936eed7',
    type: 'Motor-DC',
    name: 'DCM-201 Motor for EX-201',
    locationId: 'CPH-03',
    locationName: 'Production line',
    image: '',
  }
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDetailPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents()

    fixture = TestBed.createComponent(AssetDetailPage)
    component = fixture.componentInstance
    fixture.detectChanges()
    service = TestBed.inject(AssetService);
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the assets if successful', fakeAsync(() => {
    expect(component.asset).toBe(undefined);
    expect(component.loaded).toEqual(false);

    spyOn(service, 'getId').and.returnValue(of({ ok: true, data: mockAsset }));

    component.ionViewWillEnter();

    tick(2000);

    expect(component.asset?.id).toBe('31a92936eed7')
    expect(component.loaded).toEqual(true);
  }))

  it('should not display the assets if not successful', fakeAsync(() => {
    expect(component.asset).toBe(undefined);
    expect(component.loaded).toEqual(false);

    spyOn(service, 'getId').and.returnValue(throwError(() => new Error('Error')));
    component.ionViewWillEnter();

    tick(2000);

    expect(component.asset).toBe(undefined)
    expect(component.loaded).toEqual(true);
    expect(component.error).toEqual("Error");
  }))

  it('should return not found', fakeAsync(() => {
    expect(component.asset).toBe(undefined);
    expect(component.loaded).toEqual(false);

    spyOn(service, 'getId').and.returnValue(of({ ok: false, data: undefined }));

    component.ionViewWillEnter();

    tick(2000);

    expect(component.asset).toBe(undefined)
    expect(component.error).toEqual("Not found");
    expect(component.loaded).toEqual(true);
  }))
})
