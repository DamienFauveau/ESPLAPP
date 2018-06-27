var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { ConvoituragePage } from '../convoiturage/convoiturage';
var ConvoiturageAddPage = /** @class */ (function () {
    function ConvoiturageAddPage(navCtrl, formBuilder, toastCtrl, fireDatabase) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.fireDatabase = fireDatabase;
        this.convoitForm = this.formBuilder.group({
            adresse: ['', [Validators.required]],
            date: ['', [Validators.required]],
        });
    }
    ConvoiturageAddPage.prototype.AjouterConvoit = function () {
        if (this.convoitForm.valid) {
            this.fireDatabase.list("/convoit/").push(this.convoitForm.value);
            var toast = this.toastCtrl.create({
                message: 'Convoiturage ajouté',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
            this.navCtrl.setRoot(ConvoituragePage);
        }
    };
    ConvoiturageAddPage = __decorate([
        Component({
            selector: 'page-convoiturage-add',
            templateUrl: 'convoiturage-add.html'
        }),
        __metadata("design:paramtypes", [NavController, FormBuilder, ToastController, AngularFireDatabase])
    ], ConvoiturageAddPage);
    return ConvoiturageAddPage;
}());
export { ConvoiturageAddPage };
//# sourceMappingURL=convoiturage-add.js.map