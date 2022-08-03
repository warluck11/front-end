import { Component, OnInit } from '@angular/core';
import { EmailserviceService } from 'src/app/services/emailservice.service';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { NotifierService } from 'src/app/notifier.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',],
 
})




export class ContactComponent implements OnInit {

  emailClient={
    clientName:'',
    clientEmail:'',
    mobileNumber:'',
    emailSubject:'',
    emailMessage:'',

  }

  constructor(private emailClientservice:EmailserviceService,
    private notifierService:NotifierService
    ) { }

  ngOnInit(): void {
  }



  submitform()
  {

    console.log(this.emailClient);
    this.emailClientservice.sendreq(this.emailClient).subscribe(


      (data)=>{
        this.notifierService.showNotification('Send', 'OK');
        
      },
      (error)=>{
        this.notifierService.showNotification('Not Send', 'OK');
      }
    )
  }
}
