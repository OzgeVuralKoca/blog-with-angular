import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {
  blog: BlogModel = new BlogModel();

  editorConfig: AngularEditorConfig = {
    height: '250px'
  }

  constructor(
    public _blog: BlogService,
  ) { }

  add(form: NgForm) {
    if (form.valid) {
      this._blog.add(this.blog, () => {
        this.blog = new BlogModel();
      });
    }
  }
}
