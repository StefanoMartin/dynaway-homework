import { Component, OnInit } from '@angular/core'
import { Asset } from '../shared/models/asset.model'
import { catchError } from 'rxjs/operators';
import { AssetService } from '../shared/services/asset.service'
import { getRandomWidth } from '../shared/functions'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.page.html',
  styleUrls: ['./asset-detail.page.scss'],
})
export class AssetDetailPage implements OnInit {
  asset: Asset | undefined;
  error : string|undefined;
  loaded = false;
  assetId = "";
  skeletonWidths = [0, 1, 2].map(() => getRandomWidth(20, 70))

  constructor(private assetService: AssetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the ID parameter from the URL
    this.assetId = this.route.snapshot.paramMap.get('id') ?? "";
    // You can now use this.assetId in your component to access the ID
  }

  ionViewWillEnter(): void {
    this.asset = undefined
    this.error = undefined
    this.loaded = false
    this.assetService.getId(this.assetId).pipe(
      catchError(error => {
        console.log(error.message)
        this.asset = undefined
        this.loaded = true
        this.error = error.message
        return [];
      })
    ).subscribe(output => {
      if (output.ok) {
        this.asset = output.data
      } else {
        this.asset = undefined
        this.error = "Not found"
      }
      this.loaded = true
    })
  }

  setToastOpenUndefined() {
    this.error = undefined;
  }

}
