import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-inv',
  templateUrl: './show-inv.component.html',
  styleUrls: ['./show-inv.component.css']
})
export class ShowInvComponent implements OnInit {

  constructor(private service:SharedService) { }

  InvitedList:any=[];

  ModalTitle:string
  ActivateAddEditInvComp:boolean=false;
  inv:any;


  ngOnInit(): void {
    this.refreshInvList();
  }

  addClick(){
    this.inv={
      InvitedId:0,
      InvitedName:"",
      Country:""
    }
    this.ModalTitle="Add Invited";
    this.ActivateAddEditInvComp=true;
  }

  editClick(item: any){
    this.inv=item;
    this.ModalTitle="Edit Invited";
    this.ActivateAddEditInvComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteInvited(item.InvitedId).subscribe(data=>{
        alert(data.toString());
        this.refreshInvList();
      })
    }
  }
  cloceClick(){
    this.ActivateAddEditInvComp=false;
    this.refreshInvList();
  }
    refreshInvList(){
    this.service.getInvList().subscribe(data=>{
      this.InvitedList=data;
    });
  }
}

