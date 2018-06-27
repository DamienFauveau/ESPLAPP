import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../models/user";

@Component({
	selector: 'page-convoiturage',
	templateUrl: 'convoiturage.html'
})

export class ConvoituragePage {

	data = [];

	constructor(public navCtrl: NavController, private fireDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {
		
		this.fireDatabase.list("/convoit/").subscribe(_data => {
			this.data = _data;
		});
	}

}
