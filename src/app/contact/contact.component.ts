import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { BrancizeServicesService } from '../brancize-services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {
  isSubmitted: boolean = false;
  contactForm!: FormGroup;
  formSubmitted: boolean = false;
  countries: any;
  states: any;
  cities: any;

  constructor(private formBuilder: FormBuilder, private service:BrancizeServicesService) { }
  ngOnInit(): void {
    this.initForm();
    this.countries = Country.getAllCountries();

  }

  showModalprivacy = false;
  toggleModalprivacy(){
    this.showModalprivacy = !this.showModalprivacy;
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      organizationName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      solution: ['', Validators.required],
      message: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  
  onCountryChange(): void {
    const selectedCountryCode = this.contactForm.get('country')?.value;
    this.states = State.getStatesOfCountry(selectedCountryCode);
    this.cities = [];
    this.contactForm.get('state')?.reset();
    this.contactForm.get('city')?.reset();
  }

  onStateChange(): void {
    const selectedStateCode = this.contactForm.get('state')?.value;
    if (selectedStateCode) {
      this.cities = City.getCitiesOfState(
        this.contactForm.get('country')?.value,
        selectedStateCode
      );
    } else {
      this.cities = [];
    }
    this.contactForm.get('city')?.reset();
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      // Handle form submission here
      return;
    }

    this.service
    .contact(this.contactForm.value)
    .subscribe((result) => {
if (result.success===1) {
  const formData = this.contactForm.value;
  console.log(formData);
   this.isSubmitted = true;
  setTimeout(() => {
    this.isSubmitted = false;
  }, 8000);
  this.contactForm.reset()
}

    })
   

  }

}
