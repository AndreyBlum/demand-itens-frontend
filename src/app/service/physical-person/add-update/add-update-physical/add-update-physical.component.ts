import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysicalPerson } from '../../physical-person';
import { PhysicalPersonService } from '../../physical-person.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update-physical.component.html',
  styleUrls: ['./add-update-physical.component.scss']
})
export class PhysicalAddUpdateComponent implements OnInit {

  formGroup: FormGroup;
  physical: PhysicalPerson;

  constructor(
    private formBuilder: FormBuilder,
    private physicalService: PhysicalPersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.physical = this.activatedRoute.snapshot.data["physical"];

    this.formGroup = this.formBuilder.group({
      id: [(this.physical && this.physical.id) ? this.physical.id : null],
      name: [(this.physical && this.physical.name) ? this.physical.name : "" , Validators.required],
      docType: [(this.physical && this.physical.docType) ? this.physical.docType : "", Validators.required],
      cpf: [(this.physical && this.physical.cpf) ? this.physical.cpf : "", Validators.required],
      clientCode: [(this.physical && this.physical.clientCode) ? this.physical.clientCode : "", Validators.required]
    })
  }

  save() {
    if (this.physical && this.physical.id) {
      this.physicalService.update(this.formGroup.value).subscribe(
        (physicalUpdate) => {
          this.router.navigateByUrl("/physicals");
        },
        error => {
          alert("Teve um erro ao editar o cliente.") + JSON.stringify(error);
        }

       );
    }
    else {
      this.physicalService.add(this.formGroup.value).subscribe(
      (physicalAdd) => {
        this.router.navigateByUrl("/physicals");
      },
      error => {
        alert("Teve um erro ao adicionar o cliente.") + JSON.stringify(error);
      }

     );

    }

  }

  delete() {
    if (confirm(`Tem certeza que quer excluir ${this.physical.name}?`)) {
      this.physicalService.delete(this.physical.id).subscribe(
        response => {
          this.router.navigateByUrl("/physicals");
        },
        error => {
          alert("Error deleting") + JSON.stringify(error);
        }
      );
    }
  }

}
