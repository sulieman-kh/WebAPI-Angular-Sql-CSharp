import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-coun',
  templateUrl: './add-edit-coun.component.html',
  styleUrls: ['./add-edit-coun.component.css']
})
export class AddEditCounComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() coun:any;
  CountryId:string;
  CountryName:string;

  ngOnInit(): void {
    this.CountryId=this.coun.CountryId;
    this.CountryName=this.coun.CountryName;
  }
  addCountry(){
    var val = {CountryId:this.CountryId,
                    CountryName:this.CountryName};
    this.service.addCountry(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateCountry(){
    var val = {CountryId:this.CountryId,
      CountryName:this.CountryName};
    this.service.updateCountry(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
