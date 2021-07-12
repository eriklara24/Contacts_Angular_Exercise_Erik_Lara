"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactsApiService = void 0;
var core_1 = require("@angular/core");
var ContactsApiService = /** @class */ (function () {
    function ContactsApiService(http) {
        this.http = http;
        this.urlAPI = 'http://webdev-contacts.herokuapp.com/contacts/';
    }
    ContactsApiService.prototype.getAllContacts = function () {
        return this.http.get(this.urlAPI);
    };
    ContactsApiService.prototype.getContactByID = function (id) {
        return this.http.get(this.urlAPI + "/" + id);
    };
    ContactsApiService.prototype.createContact = function (data) {
        console.log(data);
        var contactData = {
            firstName: data.firstName,
            lastName: data.lastName,
            nickName: data.nickName,
            emails: [data.email],
            phone: [data.phone]
        };
        return this.http.post(this.urlAPI, contactData);
    };
    ContactsApiService.prototype.updateContact = function (data) {
        console.log(data);
        var contactData = {
            firstName: data.firstName,
            lastName: data.lastName,
            nickName: data.nickName,
            emails: [data.email],
            phone: [data.phone]
        };
        return this.http.put(this.urlAPI + "/" + data.id, contactData);
    };
    ContactsApiService.prototype.deleteContact = function (id) {
        return this.http["delete"](this.urlAPI + "/" + id);
    };
    ContactsApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContactsApiService);
    return ContactsApiService;
}());
exports.ContactsApiService = ContactsApiService;
