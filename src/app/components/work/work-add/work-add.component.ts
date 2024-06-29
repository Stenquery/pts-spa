import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WorkService } from '../../../services/work.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-work-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './work-add.component.html',
  styleUrl: './work-add.component.css'
})
export class WorkAddComponent {
formBuilder:FormBuilder=inject(FormBuilder);
workAddForm:FormGroup;
  constructor(private workService:WorkService,private toastrService:ToastrService){
    this.createWorkAddForm();
  }
  createWorkAddForm(){
    this.workAddForm=this.formBuilder.group({
      title:["",Validators.required],
      description:[""]
    });
  }
  add(){
    if(this.workAddForm.valid){
      let workModel=Object.assign(this.workAddForm.value);
      this.workService.add(workModel).subscribe((responseModel)=>{
        if(responseModel.success){
          this.toastrService.success(responseModel.message);
        }
          
      },(responseError)=>{
        console.log(responseError);
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
          }
        }
      });
      
    }
    else{
      this.toastrService.error("İlgili alanları doldurduğunuzdan emin olunuz!");
    }
    
  }
}
