import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../../address';
import { AddressService } from '../../address.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update-address.component.html',
  styleUrls: ['./add-update-address.component.scss']
})
export class AddUpdateAddressComponent implements OnInit {

  formGroup: FormGroup;
  address: Address;

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.address = this.activatedRoute.snapshot.data["address"];
    this.formGroup = this.formBuilder.group({
      id: [(this.address && this.address.id) ? this.address.id : null],
      cep: [(this.address && this.address.cep) ? this.address.cep : null],
      country: [(this.address && this.address.country) ? this.address.country : null],
      state: [(this.address && this.address.state) ? this.address.state : null],
      city: [(this.address && this.address.city) ? this.address.city : null],
      district: [(this.address && this.address.district) ? this.address.district : null],
      patio: [(this.address && this.address.patio) ? this.address.patio : null],
      number: [(this.address && this.address.number) ? this.address.number : null]
    })
  }

  save() {
    if (this.address && this.address.id) {
      this.addressService.update(this.formGroup.value).subscribe(
        (productUpdate) => {
          this.router.navigateByUrl("/address");
        },
        error => {
          alert("Teve um erro ao editar o endereço.") + JSON.stringify(error);
        }

       );
    }
    else {
      this.addressService.add(this.formGroup.value).subscribe(
      (productAdd) => {
        this.router.navigateByUrl("/address");
      },
      error => {
        alert("Teve um erro ao adicionar o endereço.") + JSON.stringify(error);
      }

     );

    }

  }

  searchByCep() {
    const cep = this.formGroup.get('cep')
    if(!cep.value){
      alert('O CEP não foi provido')
    }
    const cep2 = this.addressService.searchByCep(cep.value)
    }

  getCepValue() {
    return this.formGroup.get('cep').value
  }

  delete() {
    if (confirm(`Tem certeza que quer excluir ${this.address.id}?`)) {
      this.addressService.delete(this.address.id).subscribe(
        response => {
          this.router.navigateByUrl("/address");
        },
        error => {
          alert("Error deleting") + JSON.stringify(error);
        }
      );
    }
  }

}
