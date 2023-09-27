import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiserviceService } from 'src/app/service/movieapiservice.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  getmoviedetailsresult: any;
  getmovievideoresult: any;
  getmovievideocastresult: any;

  constructor(
    private service: MovieapiserviceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getmovieid = this.router.snapshot.paramMap.get('id');
    console.log(getmovieid, 'getmovieid#');
    this.getmovie(getmovieid);
    this.moviecast(getmovieid);
    this.getVideo(getmovieid);
  }
  // get movie
  getmovie(id: any) {
    this.service.getmoviedetails(id).subscribe((res) => {
      console.log(res, 'getmoviedetails#');
      this.getmoviedetailsresult = res;
    });
  }

  // getyoutube video

  getVideo(id:any)
  {
    this.service.getmovievideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getmovievideoresult = element.key;
            }
        });

    });
  }

  // movie cast
  moviecast(id: any) {
    this.service.getmoviecast(id).subscribe((res) => {
      console.log(res, 'getmoviecast#');
      this.getmovievideocastresult = res.cast
      ;
    });
  }
}
