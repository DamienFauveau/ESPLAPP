import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-convoiturage-add',
	templateUrl: 'convoiturage-add.html'
})

export class ConvoiturageAddPage {

	convoitForm: FormGroup;

	constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public toastCtrl: ToastController, private fireDatabase: AngularFireDatabase) {
		this.convoitForm = this.formBuilder.group({
			adresse: ['', [Validators.required]],
			destination: ['', [Validators.required]],
			date: ['', [Validators.required]],
			places: ['', [Validators.required]],
		});
	}

	AjouterConvoit() {

		if(this.convoitForm.valid) {

			this.fireDatabase.list("/convoit/").push(this.convoitForm.value);

			let toast = this.toastCtrl.create({
				message: 'Covoiturage ajouté',
				duration: 2000,
				position: 'top'
			});
			toast.present();

			this.navCtrl.setRoot(HomePage);
		}
	}

}
