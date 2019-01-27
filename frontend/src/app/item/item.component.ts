import { Component, OnInit, Input } from '@angular/core';
import {Course} from "../types";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() course: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  upvote(id: string) {
    this.courseService.upvoteCourse(id)
      .subscribe(({data})  => {
        console.log('upvote', data)
      }, error => {
        console.log('fail to upvote', error)
      })
  }

  downvote(id: string) {
    this.courseService.downvoteCourse(id)
      .subscribe(({data}) => {
        console.log('downvote', data)
      }, error => {
        console.log('fail to downvote', error)
      })
  }

}
