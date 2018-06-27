import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'page-register',
	templateUrl: 'register.html'
})

export class RegisterPage {

	registerForm: FormGroup;

	constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams, private toastCtrl: ToastController, public alertCtrl: AlertController) {
		this.registerForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
			confirm_password: ['', [Validators.required, this.matchOtherValidator('password')]]
		});
	}

	async register() {
		if(this.registerForm.valid) {
			let email: any = this.registerForm.controls.email.value;
			let password: any = this.registerForm.controls.password.value;
			
			this.afAuth.auth.createUserWithEmailAndPassword(email, password)
			.then(user => {

				let toast = this.toastCtrl.create({
					message: 'Utilisateur créé',
					duration: 2000,
					position: 'top'
				});
				toast.present();

				this.navCtrl.push(HomePage);

			}, error => {
				let alert = this.alertCtrl.create({
					title: 'Erreur',
					message: "Création du compte impossible. Vérifiez que votre adresse email n'est pas déjà utilisée.",
					buttons: ['OK']
				});
				alert.present();
			})
		}
	}

	matchOtherValidator (otherControlName: string) {

		let thisControl: FormControl;
		let otherControl: FormControl;

		return function matchOtherValidate (control: FormControl) {

			if (!control.parent) {
				return null;
			}

		    // Initializing the validator.
		    if (!thisControl) {
		    	thisControl = control;
		    	otherControl = control.parent.get(otherControlName) as FormControl;
		    	if (!otherControl) {
		    		throw new Error('matchOtherValidator(): other control is not found in parent group');
		    	}
		    	otherControl.valueChanges.subscribe(() => {
		    		thisControl.updateValueAndValidity();
		    	});
		    }
		    if (!otherControl) {
		    	return null;
		    }
		    if (otherControl.value !== thisControl.value) {
		    	return {
		    		matchOther: true
		    	};
		    }
		    return null;
		}
	}
}