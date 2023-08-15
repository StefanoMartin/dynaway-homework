import { Asset } from '../models/asset.model'

export const mockAssets: Asset[] = [{
  id: 'e7833d96',
  type: 'Forklift',
  name: 'Forklift FL-1',
  locationId: 'AAL',
  locationName: 'Aalborg warehouse',
  image: '',
}, {
  id: 'ca87b865653f',
  type: 'Forklift',
  name: 'Forklift FL-2',
  locationId: 'AAL',
  locationName: 'Aalborg warehouse',
  image: 'https://cdn.pixabay.com/photo/2012/11/30/14/20/fork-68042_960_720.jpg',
}, {
  id: '6f318992',
  type: 'Car',
  name: 'Skoda Octavia',
  locationId: 'CPH-01',
  locationName: 'Copenhagen office',
  image: 'https://cdn.pixabay.com/photo/2018/03/28/17/42/skoda-octavia-3269945_960_720.png',
}, {
  id: '87997b682313',
  type: 'Car',
  name: 'Audi A4',
  locationId: 'CPH-01',
  locationName: 'Copenhagen office',
  image: '',
}, {
  id: 'dde101b1',
  type: 'Air compressor',
  name: 'COM-001 Air Compressor',
  locationId: 'CPH-03',
  locationName: 'Production line',
  image: '',
}, {
  id: '31a92936eed7',
  type: 'Motor-DC',
  name: 'DCM-201 Motor for EX-201',
  locationId: 'CPH-03',
  locationName: 'Production line',
  image: '',
}]

/*
  This is how would a response from the server look like
 */
export const mockAssetHttpResponse = {
  ok: true,
  data: mockAssets,
}

export const mockAssetHttpResponseId = (id: string) => {
  const value = mockAssets.find((ma) => ma.id === id)
  return {
    ok: !!value,
    data: value
  }
}
