import { Component } from '@angular/core'
import { Asset } from '../shared/models/asset.model'
import { AssetService } from '../shared/services/asset.service'
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  assets: (Asset|undefined)[] = new Array(6);
  isToastOpen = false;

  constructor(private assetService: AssetService) {}

  ionViewWillEnter(): void {
    this.assets = new Array(6);
    this.assetService.getAll().pipe(
      catchError(_error => {
        // console.log(error.message)
        this.assets = []
        this.setToastOpen(true)
        return [];
      })
    ).subscribe(output => {
      if(output.ok){
        this.assets = output.data
      }else{
        this.assets = []
        this.setToastOpen(true)
      }
    })
  }

  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
