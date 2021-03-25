import { Component } from '@angular/core';
import {Platform} from '@ionic/angular'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
rangeVal:string;
  constructor(public Platform:Platform) {

    this.Platform.ready().then(()=>{
      this.rangeVal = "16";
    })
  }

}
