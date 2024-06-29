import { Component, inject } from '@angular/core';
import { Work } from '../../models/work';
import { CommonModule } from '@angular/common';
import { WorkService } from '../../services/work.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { ToastrModule, ToastrService, provideToastr } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule,VatAddedPipe,FormsModule,FilterPipePipe,ToastrModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  works:Work [] = [];
  dataLoaded=false;
  filterText="";
  authService=inject(AuthService);
  router=inject(Router);
  constructor(private workService:WorkService,private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,private cartService:CartService){
      if (this.authService.isAuthenticated()) {
        this.activatedRoute.params.subscribe((params)=>{
          if(params["categoryId"]){
            this.getWorksByCategoryId(params["categoryId"]);
          }
          else{
            this.getAllWorks();
          }
        });
      } else {
        this.router.navigateByUrl("login");
      }
    
  }
  
  getAllWorks(){
    this.workService.getWorks().subscribe((response)=>{
      this.works=response.data;
      this.dataLoaded=true;
    });
  }
  getWorksByCategoryId(categoryId:number){
    this.workService.getWorksByCategoryId(categoryId).subscribe((response)=>{
      this.works=response.data;
      this.dataLoaded=true;
    });
  }
  addToCart(work:Work){
    this.cartService.addToCart(work);
    this.toastrService.success("Eklendi.");
  }
}


