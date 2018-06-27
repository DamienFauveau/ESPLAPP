import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterPage } from '../register/register';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {

	loginForm: FormGroup;
	registerPage: any;

	constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams, private toastCtrl: ToastController, public alertCtrl: AlertController) {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
		});

		this.registerPage = RegisterPage;
	}

	async login() {
		let email: any = this.loginForm.controls.email.value;
		let password: any = this.loginForm.controls.password.value;

		this.afAuth.auth.signInWithEmailAndPassword(email, password)
		.then(user => {

			let toast = this.toastCtrl.create({
				message: 'Utilisateur connecté',
				duration: 2000,
				position: 'top'
			});
			toast.present();

			this.navCtrl.setRoot(HomePage);
			
		}, error => {
			let alert = this.alertCtrl.create({
				title: 'Erreur',
				message: 'Adresse email ou mot de passe incorrect',
				buttons: ['OK']
			});
			alert.present();
		})
	}
}
