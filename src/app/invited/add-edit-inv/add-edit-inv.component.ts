import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-inv',
  templateUrl: './add-edit-inv.component.html',
  styleUrls: ['./add-edit-inv.component.css']
})
export class AddEditInvComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() inv:any;

  InvitedId:string;
  InvitedName:string;
  Country:string;

  CountryList:any=[];


  ngOnInit(): void {
    this.loadCountryList();
  }

  loadCountryList(){
    this.service.getAllCountriesNames().subscribe((data:any)=>{
      this.CountryList=data;
      this.InvitedId=this.inv.CountryId;
      this.InvitedName=this.inv.CountryName;
      this.Country=this.inv.Country;
    })
  }


  addInvited(){
    var val = {InvitedId:this.InvitedId,
                    InvitedName:this.InvitedName,
                  Country:this.Country};
    this.service.addInvited(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateInvited(){
    var val = {InvitedId:this.InvitedId,
      InvitedName:this.InvitedName,
      Country:this.Country
    };
    this.service.updateInvited(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
