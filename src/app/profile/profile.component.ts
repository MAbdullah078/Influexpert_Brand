import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services';
import swal from "sweetalert2";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
    providers:[AuthenticationService]
})
export class ProfileComponent implements OnInit {

    model: any = {};
     image: File;
    profile_image: any;
  constructor(private obj:AuthenticationService) {

  }

  ngOnInit() {
            console.log('Profile Picture is.....',this.currentUser.profile_image);
      this.loadprofilepic();
      window.scroll(0,0);

  }
     currentUser= JSON.parse(localStorage.getItem('currentUser'));

    onChange($event) {
        this.image= $event.target.files[0];
        //
        // console.log('Event on OnChange',$event.target.files[0]);
        console.log('Event on OnChange',this.image);
        this.obj.onUpload(this.image).subscribe((response) => {
                // console.log('set any success actions...');
                this.loadprofilepic();
                swal.fire({
                    type: 'success',
                    title: 'Profile PIcture Updated.\n' +
                    '\n',
                    // text: 'Please check your username or password',
                    showConfirmButton: false,
                    width: '512px',
                    timer: 2000
              
                  }); 

            },

            (error) => {
                console.log('set any error actions...');
            })
    }

    loadprofilepic(){
        this.obj.get_profile_pic().subscribe(observer=>{

            // this.profile_image= observer.Message.path;
            this.profile_image= observer['message'];
            console.log('Result is ', this.profile_image);
        })
    }
}
