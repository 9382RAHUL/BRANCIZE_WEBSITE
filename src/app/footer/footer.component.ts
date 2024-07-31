import { Component, OnInit } from '@angular/core';
import { BrancizeServicesService } from '../brancize-services.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  showModalprivacy = false;
  toggleModalprivacy(){
    this.showModalprivacy = !this.showModalprivacy;
  }

 

}
