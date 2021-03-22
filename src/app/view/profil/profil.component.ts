import { UserService } from './../../services/user/user.service';
import { User } from './../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: User;
  userForm: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.user = this.userService.getUserBy('id', +id);
    this.userForm = this.formBuilder.group({
      'firstname': ['', [Validators.required]],
      'lastname': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });
  }

  onSubmitEditUser() {
    this.userService.editUser(this.user);
    this.router.navigate(['products']);
  }

}
