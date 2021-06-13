import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Demand } from '../../demand';
import { DemandService } from '../../demand.service';

@Component({
  selector: 'app-order-register-edit',
  templateUrl: './add-update-demand.component.html',
  styleUrls: ['./add-update-demand.component.scss']
})
export class AddUpdateDemandComponent implements OnInit {

  formGroup: FormGroup;
  demand: Demand;

  constructor(
    private formBuilder: FormBuilder,
    private demandService: DemandService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.demand = this.activatedRoute.snapshot.data["demand"];
    console.log(this.demand)
    this.formGroup = this.formBuilder.group({
      situation: [(this.demand && this.demand.situation) ? this.demand.situation : ""],
      date: [(this.demand && this.demand.date) ? this.demand.date : null],
      totalValue: [(this.demand && this.demand.totalValue) ? this.demand.totalValue : null],
      discount: [(this.demand && this.demand.discount) ? this.demand.discount : null],
      address: [(this.demand && this.demand.address) ? this.demand.address.id : null],
      client: [(this.demand && this.demand.client) ? this.demand.client.id : null],
    })
  }

  save() {
    const values: any = this.formGroup.getRawValue();

    if (this.demand && this.demand.id) {
      this.demandService.update(values).subscribe(
        (demandUpdate) => {
          this.router.navigateByUrl("/demands");
        },
        error => {
          alert("Error updating") + JSON.stringify(error);
        }
       );
  }
    else {
      this.demandService.add(values).subscribe(
        (demandSignUp) => {
          this.router.navigateByUrl("/demands");
        },
        error => {
          alert("Error registering") + JSON.stringify(error);
        }

       );
  }
}

  delete() {
    if (confirm("Are you sure you want to delete the order? By:" + this.demand.client)) {
      this.demandService.delete(this.demand.id).subscribe(
        response => {
          this.router.navigateByUrl("/orders");
        },
        error => {
          alert("Error deleting") + JSON.stringify(error);
        }
      );
    }
  }

}
