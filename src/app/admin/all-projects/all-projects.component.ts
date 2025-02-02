import { Component } from '@angular/core';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent {
  constructor(
    private service: DatabaseServiceService,
  ) {}
  allProducts!: any;

  ngOnInit() {
    // this.service.getAllProducts().subscribe({
    //   next: (r) => {
    //     this.allProducts = r;
    //   },
    //   error: (err) => {
    //     alert(err);
    //     console.log(err);
    //   },
    // });
  }

  onUpdate(d: any) {
    // const dialogRef = this.dialog.open(EditProductComponent, {
    //   data: d,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  onDelete(id: any) {
    // this.service.deleteProduct(id).subscribe((r) => {});
    // alert('Product Deleted');
    // this.ngOnInit();
  }

  //pop up
  openDialog(): void {}
}
