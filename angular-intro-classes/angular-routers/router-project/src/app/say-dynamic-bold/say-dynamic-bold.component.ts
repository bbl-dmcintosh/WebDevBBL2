import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-say-dynamic-bold',
  templateUrl: './say-dynamic-bold.component.html',
  styleUrls: ['./say-dynamic-bold.component.css']
})
export class SayDynamicBoldComponent implements OnInit {

  theme : string;

  constructor(public route : ActivatedRoute) { 

  }

  ngOnInit() {
    
     this.route.params.subscribe(dataParams => {

      this.theme= dataParams['theme'] + ' Theme';
      
    });
  }

}
