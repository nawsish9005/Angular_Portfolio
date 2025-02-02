import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {
  constructor(private service: DatabaseServiceService) {}

  submit(d: NgForm) {
    console.log(d.value);
    this.service.addProject(d.value).subscribe({
      next: (r) => {
        console.log(r);
      },
      error: (err) => {
        console.log(err);
        alert(err);
      },
    });
    alert('Product Has Been Added');
    d.reset();
  }
}
