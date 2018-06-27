import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlanningPage } from '../planning/planning';
import { ActusPage } from '../actus/actus';
import { ConvoituragePage } from '../convoiturage/convoiturage';
import { ConvoiturageAddPage } from '../convoiturage-add/convoiturage-add';
import { RestoPage } from '../resto/resto';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	planningPage: any;
	actusPage: any;
	convoituragePage: any;
	convoiturageAddPage: any;
	restoPage: any;
	loginPage: any;
	data = [];
	parkingForm: FormGroup;
	clicked: boolean = false;
	user: any = false;

	constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public toastCtrl: ToastController, private fireDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {
		this.planningPage = PlanningPage;
		this.actusPage = ActusPage;
		this.convoituragePage = ConvoituragePage;
		this.convoiturageAddPage = ConvoiturageAddPage;
		this.restoPage	= RestoPage;
		this.loginPage = LoginPage;

		this.user = this.afAuth.auth.currentUser;
		if(this.user) {
			this.convoiturageAddPage = ConvoiturageAddPage;	
		} else {
			this.convoiturageAddPage = LoginPage;
		}

		this.fireDatabase.list("/parking/").subscribe(_data => {
			this.data = _data;
		});
	}

	updatePlaces(placesRest) {
		if(!this.clicked) {
			this.fireDatabase.list("/parking/").update('L9jfwyJlL5AQ6FvI5sh', {
				places: placesRest - 1
			});
			this.clicked = true;
		} else {
			this.fireDatabase.list("/parking/").update('L9jfwyJlL5AQ6FvI5sh', {
				places: placesRest + 1
			});
			this.clicked = false;
		}
	}

}
