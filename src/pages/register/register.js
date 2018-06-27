var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ConvoiturageAddPage } from '../convoiturage-add/convoiturage-add';
import { FormBuilder, Validators } from '@angular/forms';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, navCtrl, formBuilder, navParams, toastCtrl, alertCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.registerForm = this.formBuilder.group({
            passwords: this.formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required]],
                confirm_password: ['', [Validators.required]],
            }, { validator: this.passwordConfirmation }),
        });
    }
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var email, password;
            return __generator(this, function (_a) {
                if (this.registerForm.valid) {
                    email = this.registerForm.controls.email.value;
                    password = this.registerForm.controls.password.value;
                    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                        .then(function (user) {
                        var toast = _this.toastCtrl.create({
                            message: 'Utilisateur créé',
                            duration: 2000,
                            position: 'bottom'
                        });
                        toast.present();
                        _this.navCtrl.setRoot(ConvoiturageAddPage);
                    }, function (error) {
                        var alert = _this.alertCtrl.create({
                            title: 'Erreur',
                            message: 'Une erreur est survenue. Veuillez réessayer',
                            buttons: ['OK']
                        });
                        alert.present();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.passwordConfirmation = function () {
        if (this.registerForm.controls.password.value !== this.registerForm.controls.confirm_password.value) {
            return { invalid: true };
        }
    };
    RegisterPage = __decorate([
        Component({
            selector: 'page-register',
            templateUrl: 'register.html'
        }),
        __metadata("design:paramtypes", [AngularFireAuth, NavController, FormBuilder, NavParams, ToastController, AlertController])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map