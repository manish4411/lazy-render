import { Component, OnInit } from '@angular/core';

import { TestData } from './data/test.data';
import { GlobalserviceService } from './globalservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Medium';
constructor(private service: GlobalserviceService){}
  // cities = TestData;
  datas:any= [];

  ngOnInit(): void {
    this.getData();
  }
getData(){
  this.service.getProjectList().subscribe( res => {
    console.log(res)
    this.datas = res;
  })
}
}
