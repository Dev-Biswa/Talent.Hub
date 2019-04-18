import { Artist } from './../models/artist.model';
import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  allJobs: Job[] = [];
  modelJobs: Job[] = [];
  actorJobs: Job[] = [];
  artists: Artist[] = [];

  ngOnInit() {
    this.initJobs();
    this.initArtists();
  }

  public initJobs(){
    this.allJobs = [
      {Title:"EndemolShine Is Looking For Female Models With X-Factor From All Over India", Description:"Models should be pretty & beautiful with perfect ", Location: "Mumbai", PostedDate: new Date()},
      {Title:"Female Actor Required For Short Film Production", Description:"Looking for female artists for a Short film produc", Location: "Chennai", PostedDate: new Date()},
    ];

    this.actorJobs = [
      {Title:"Call For Acting Workshop Conducted By Casting Bay", Description:"KINESTHESIA is a workshop programme where we figure ", Location: "Hyderabad", PostedDate: new Date()},
      {Title:"Female Actor Required For Short Film Production", Description:"Looking for female artists for a Short film produc", Location: "Chennai", PostedDate: new Date()},
    ]
  }

  public initArtists() {
    this.artists = [
      {ImageUrl:"../../assets/artists/Avtar.jpg",Name:"Avtar",Designation:"Actor",Location:"Mumbai"},
      {ImageUrl:"../../assets/artists/anupriya.jpg",Name:"Anupriya",Designation:"Actor",Location:"Mumbai"},
      {ImageUrl:"../../assets/artists/gautum.jpg",Name:"Gautum",Designation:"Anchor",Location:"Pune"},
      {ImageUrl:"../../assets/artists/Rukmani.jpg",Name:"Rukmani",Designation:"Actor",Location:"Mumbai"},
    ]
  }

}
