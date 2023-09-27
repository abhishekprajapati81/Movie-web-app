import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieapiserviceService } from 'src/app/service/movieapiservice.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
})
export class SearchpageComponent implements OnInit {
  constructor(private service:MovieapiserviceService) {}

  ngOnInit(): void { }
  searchResult:any
  serchFrom = new FormGroup({
  'moviename': new FormControl(null),
  });

  submitfrom() {
    
    console.log(this.serchFrom.value, 'searchfrom#');
    this.service.serchMovie(this.serchFrom.value).subscribe((res)=>{
    console.log(res,'serchmovie');
    this.searchResult = res.results;
    })
  }
}
