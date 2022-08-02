import { Component, OnInit } from '@angular/core';
import { EmailserviceService } from 'src/app/services/emailservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailClient={
    clientName:'',
    clientEmail:'',
    mobileNumber:'',
    emailSubject:'',
    emailMessage:'',

  }

  constructor(private emailClientservice:EmailserviceService) { }

  ngOnInit(): void {
  }



  submitform()
  {

    console.log(this.emailClient);
    this.emailClientservice.sendreq(this.emailClient).subscribe(


      (data)=>{
        alert('send');
        
      },
      (error)=>{
        alert('Not send');
      }
    )
  }
}
