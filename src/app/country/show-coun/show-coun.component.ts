import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-coun',
  templateUrl: './show-coun.component.html',
  styleUrls: ['./show-coun.component.css']
})
export class ShowCounComponent implements OnInit {


  constructor(private service:SharedService) { }

  CountryList:any=[];

  ModalTitle:string
  ActivateAddEditCounComp:boolean=false;
  coun:any;


  CountryIdFilter:string="";
  CountryNameFilter:string="";
  CountryListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshCounList();
  }

  addClick(){
    this.coun={
      CountryId:0,
      CountryName:""
    }
    this.ModalTitle="Add Country";
    this.ActivateAddEditCounComp=true;
  }

  editClick(item: any){
    this.coun=item;
    this.ModalTitle="EditCountry";
    this.ActivateAddEditCounComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteCountry(item.CountryId).subscribe(data=>{
        alert(data.toString());
        this.refreshCounList();
      })
    }
  }
  cloceClick(){
    this.ActivateAddEditCounComp=false;
    this.refreshCounList();
  }
  refreshCounList(){
    this.service.getCounList().subscribe(data=>{
      this.CountryList=data;
      this.CountryListWithoutFilter=data;
    });
  }
  FilterFn(){
    var CountryIdFilter = this.CountryIdFilter;
    var CountryNameFilter = this.CountryNameFilter;

    this.CountryList = this.CountryListWithoutFilter.filter(function (e : any){
      return e.CountryId.toString().toLowerCase().includes(
        CountryIdFilter.toString().trim().toLowerCase()
      )&&
      e.CountryName.toString().toLowerCase().includes(
        CountryNameFilter.toString().trim().toLowerCase()
      )
    });

  }
}
