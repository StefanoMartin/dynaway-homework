import { TestBed } from '@angular/core/testing'

import { AssetService } from './asset.service'

describe('AssetService', () => {
  let service: AssetService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AssetService)
  })

  it('return all assets', (done) => {
    service.getAll().subscribe((res) => {
      expect(res).toBeTruthy()
      done()
    }, (e: Error) => {
      expect(e.message).toBe('Http error') 
      done()     
    })
  })

  it('return a specific assets', (done) => {
    service.getId('e7833d96').subscribe((res) => {
      expect(res.data?.type).toBe('Forklift')
      done()
    }, (e: Error) => {
      expect(e.message).toBe('Http error')   
      done()   
    })
  })


  it('return a wrong assets', (done) => {
    service.getId('wrong').subscribe((res) => {
      expect(res.ok).toBe(false)
      done()
    }, (e: Error) => {
      expect(e.message).toBe('Http error')   
      done()   
    })
  })
})
