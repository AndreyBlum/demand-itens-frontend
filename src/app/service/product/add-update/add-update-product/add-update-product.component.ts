import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss']
})
export class ProductAddUpdateComponent implements OnInit {

  formGroup: FormGroup;
  product: Product;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log("teste")
    this.product = this.activatedRoute.snapshot.data["product"];
    this.formGroup = this.formBuilder.group({
      id: [(this.product && this.product.id) ? this.product.id : null],
      code: [(this.product && this.product.code) ? this.product.code : "" , Validators.required],
      description: [(this.product && this.product.description) ? this.product.description : "", Validators.required],
      unitOfmeasurement: [(this.product && this.product.unitOfmeasurement) ? this.product.unitOfmeasurement : "", Validators.required],
      unitaryValue: [(this.product && this.product.unitaryValue) ? this.product.unitaryValue : "", Validators.required],
      totalAmount: [(this.product && this.product.totalAmount) ? this.product.totalAmount : "", Validators.required],
      status: [(this.product && this.product.status) ? this.product.status : "", Validators.required]
    })
  }

  save() {
    if (this.product && this.product.id) {
      this.productService.update(this.formGroup.value).subscribe(
        (productUpdate) => {
          this.router.navigateByUrl("/products");
        },
        error => {
          alert("Teve um erro ao editar o produto.") + JSON.stringify(error);
        }

       );
    }
    else {
      this.productService.add(this.formGroup.value).subscribe(
      (productAdd) => {
        this.router.navigateByUrl("/products");
      },
      error => {
        alert("Teve um erro ao adicionar o produto.") + JSON.stringify(error);
      }

     );

    }

  }

  delete() {
    if (confirm(`Tem certeza que quer excluir ${this.product.code}?`)) {
      this.productService.delete(this.product.id).subscribe(
        response => {
          this.router.navigateByUrl("/products");
        },
        error => {
          alert("Error deleting") + JSON.stringify(error);
        }
      );
    }
  }

}
