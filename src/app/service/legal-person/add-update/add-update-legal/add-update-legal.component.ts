import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LegalPerson } from '../../legal-person';
import { LegalPersonService } from '../../legal-person.service';

@Component({
  selector: 'legal-add-update',
  templateUrl: './add-update-legal.component.html',
  styleUrls: ['./add-update-legal.component.scss']
})
export class LegalAddUpdateComponent implements OnInit {

  formGroup: FormGroup;
  legal: LegalPerson;

  constructor(
    private formBuilder: FormBuilder,
    private legalService: LegalPersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log("teste")
    this.legal = this.activatedRoute.snapshot.data["legal"];
    this.formGroup = this.formBuilder.group({
      id: [(this.legal && this.legal.id) ? this.legal.id : null],
      name: [(this.legal && this.legal.name) ? this.legal.name : "" , Validators.required],
      docType: [(this.legal && this.legal.docType) ? this.legal.docType : "", Validators.required],
      cnpj: [(this.legal && this.legal.cnpj) ? this.legal.cnpj : "", Validators.required],
      clientCode: [(this.legal && this.legal.clientCode) ? this.legal.clientCode : "", Validators.required]
    })
  }

  save() {
    if (this.legal && this.legal.id) {
      this.legalService.update(this.formGroup.value).subscribe(
        (legalUpdate) => {
          this.router.navigateByUrl("/legals");
        },
        error => {
          alert("Teve um erro ao editar o cliente.") + JSON.stringify(error);
        }

       );
    }
    else {
      this.legalService.add(this.formGroup.value).subscribe(
      (legalAdd) => {
        this.router.navigateByUrl("/legals");
      },
      error => {
        alert("Teve um erro ao adicionar o cliente.") + JSON.stringify(error);
      }

     );

    }

  }

  delete() {
    if (confirm(`Tem certeza que quer excluir ${this.legal.name}?`)) {
      this.legalService.delete(this.legal.id).subscribe(
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
