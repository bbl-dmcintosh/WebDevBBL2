import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-say-light',
  templateUrl: './say-light.component.html',
  styleUrls: ['./say-light.component.css']
})
export class SayLightComponent implements OnInit {

  theme : string;

  constructor(public route : ActivatedRoute) { 
  }

  ngOnInit() {
    
    this.route.params.subscribe(dataParams => {

     this.theme= dataParams['theme'] + ' Theme';
     
   });
 }

}
