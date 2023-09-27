import { Component, OnInit } from '@angular/core';
import { MovieapiserviceService } from 'src/app/service/movieapiservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  BannerApiDataresult: any = [];
  trendingmovieresult: any = [];
  actionemovieresult: any = [];
  adventuremovieresult: any = [];
  animationemovieresult: any = [];
  comedymovieresult: any = [];
  documentrymovieresult: any = [];
  scincefictionmovieresult: any = [];
  thillermovieresult: any = [];

  constructor(private service: MovieapiserviceService) {}

  ngOnInit(): void {
    this.bannerData();
    this.trendingdata();
    this.actionmovie();
    this.adventuremovie();
    this.animationemovie();
    this.comedymovie();
    this.documentrymovie();
    this.scincefictionmovie();
    this.thillermovie();
  }

  // bannerdata
  bannerData() {
    this.service.bannerapidata().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.BannerApiDataresult = result.results;
    });
  }

  // trendingmoviedata
  trendingdata() {
    this.service.trendingmovie().subscribe((res) => {
      console.log(res, 'trendingmovie#');
      this.trendingmovieresult = res.results;
    });
  }

  // actionmovie
  actionmovie(){
  this.service.getactionmovie().subscribe((res)=>{
  console.log(res,'actionemovie#');
  this.actionemovieresult = res.results;
  })
  }

  // adventuremovie
  adventuremovie(){
  this.service.getadventuremovie().subscribe((res)=>{
  console.log(res,'adventuremovie#');
  this.adventuremovieresult = res.results;
  })
  }

  // animationemovie
  animationemovie(){
  this .service.getanimationmovie().subscribe((res)=>{
  console.log(res,'animationmovie#');
  this.animationemovieresult = res.results;
  })
  }

  // comedymovie
  comedymovie(){
  this.service.getcomedymovie().subscribe((res)=>{
  console.log(res,'comedymovie#');
  this.comedymovieresult = res.results;
  })
  }

  // documentrymovie
  documentrymovie()
  {
  this.service.getdocumentery().subscribe((res)=>{
  console.log(res,'documentrymovie#');
  this.documentrymovieresult = res.results;
  })
  }

  // scincefictionmovie
  scincefictionmovie(){
  this.service.getsciencefictionmovie().subscribe((res)=>{
  console.log(res,'scincefictionmovie#');
  this.scincefictionmovieresult = res.results;
  })
  }
  // thillermovie
  thillermovie(){
  
  this.service.getthrillermovie().subscribe((res)=>{
  console.log(res,'thillermovie#');
  this.thillermovieresult = res.results;  
  })
  }
}
