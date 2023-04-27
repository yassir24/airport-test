import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  flightData: any;
  time = Date.now()
  loading = true

  constructor(private http: HttpClient) { }

   async ngOnInit() {
    this.http.get("https://opensky-network.org/api/flights/all?begin=1682602755&end=1682609665").subscribe((response) => {
  console.log('this is the response ',response);
  this.loading = false
  this.flightData = response
});
  }

}
