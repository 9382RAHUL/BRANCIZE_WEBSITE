import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrancizeServicesService } from '../brancize-services.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  form!: FormGroup;
  isSubmitted: boolean = false;
  errorMessage!: any;
  successMessage!: any;
  pdfFile: File | null = null;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private service:BrancizeServicesService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      candidateName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      postApplied: ['', Validators.required],
      message: ['',Validators.required],
      pdf: [null, Validators.required],
    });
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'application/pdf') {
        this.pdfFile = file;
      } else {
        // Invalid file type
        this.pdfFile = null;
      }
    } else {
      // No file selected
      this.pdfFile = null;
    }
  }
  


  submitForm() {
    if (this.form.invalid || !this.pdfFile) {
      return;
    }

    const formData = new FormData();
    formData.append('candidateName', this.form.value.candidateName);
    formData.append('mobileNo', this.form.value.mobileNo);
    formData.append('email', this.form.value.email);
    formData.append('postApplied', this.form.value.postApplied);
    formData.append('message', this.form.value.message);
    formData.append('pdf', this.pdfFile);

    this.service.career(formData).subscribe(
      (result) => {
        console.log(result);
       if (result.success===1) {
        this.form.reset()
        this.successMessage = 'Email sent successfully';
        this.errorMessage = null;
        this.isSubmitted=true;
        setTimeout(() => {
          this.isSubmitted=false;
        }, 5000);
       }
      },
      (error) => {
        console.error('Error sending career form:', error);
        this.errorMessage = 'Error occurred while submitting the form';
        this.successMessage = null;
      }
    );
  }
}
