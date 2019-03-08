import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public allContacts: any
	contactnamefname; contactnamelname; contactnumber;
	constructor(public navCtrl: NavController, public contacts: Contacts) {


	}


	openFilters() {
		var xyz = this.contacts.create();
		xyz.name = new ContactName(null, this.contactnamefname, this.contactnamelname);
		xyz.phoneNumbers = [new ContactField('mobile', this.contactnumber)];
		xyz.save().then(
			() => alert('Contact saved!', xyz),
			(error: any) => console.error('Error saving contact.', error)
		);

	}

	getContacts() {
		this.contacts.find(['displayName', 'name', 'phoneNumbers'], { filter: "", multiple: true })
			.then(data => {
				this.allContacts = data

			});
	}
}
