import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Observable} from "rxjs";

import {Course} from "../types";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() searchTerm: string;

  courses: Observable<Course[]>;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  ngOnChanges(): void {
    this.getAllCourses();
  }

  private getAllCourses() {
    this.courses = this.courseService.getAllCourses(this.searchTerm);
  }

}
