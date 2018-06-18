import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  startDt:Date;
  endDt: Date;
  sDate: string;
  eDate: string;
  step2Enabled:boolean = false;
  projectData: Array<{name: string, hours:number, hourRate: number, amount: number}>;
  currentEdit: {
    index : number;
    name : string,
    hours : number,
    hourRate : number,
    amount : number
  } = {
    index: 0,
    name: "",
    hours: 0,
    hourRate: 0,
    amount: 0
  };
  constructor() {
    this.projectData = [
      {
        name: "BLRE",
        hours: 5,
        hourRate: 14,
        amount: 5*14
      }, {
        name: "BFit",
        hours: 10,
        hourRate: 14,
        amount: 10*14
      }, {
        name: "Muscular Strength",
        hours: 8,
        hourRate: 14,
        amount: 8*14
      }
    ];
   }

  ngOnInit() {
  }
  btnClick(){
    this.sDate = this.startDt.getDate()+"/"+(this.startDt.getMonth() + 1)+"/"+this.startDt.getFullYear();
    this.eDate = this.endDt.getDate()+"/"+(this.endDt.getMonth() + 1)+"/"+this.endDt.getFullYear();
    console.log("Start Date: " + this.sDate + "\nEnd Date: "+this.eDate);
    this.step2Enabled = true;
  }
  updateCurrentEdit(project){
    console.log(project);
    this.currentEdit.name = project.name;
    this.currentEdit.hours = project.hours;
    this.currentEdit.hourRate = project.hourRate;
    this.currentEdit.amount = project.amount;
    this.currentEdit.index = this.projectData.indexOf(project);
  }
  updateProductData(){
    this.projectData[this.currentEdit.index]={
      name: this.currentEdit.name,
      hours: this.currentEdit.hours,
      hourRate: this.currentEdit.hourRate,
      amount: this.currentEdit.amount
    };
  }
}
