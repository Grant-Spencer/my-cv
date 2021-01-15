import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
school = "Wilmington College";
major = "Psychology";
year = "2008";

  constructor() { }

  ngOnInit(): void {
  }

}
