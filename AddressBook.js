console.log("welcome to address book PerformanceNavigationTimingm");
class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      this.contacts.push(contact);
    }
  
    deleteContact(contact) {
      this.contacts = this.contacts.filter(c => c !== contact);
    }
  }
  
  class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  }
  const addressBook = new AddressBook();

  const contact1 = new Contact(
    'John',
    'cena',
    '123 Main ',
    'New York',
    'NY',
    '10001',
    '123-456-7890',
    'john.@example.com'
  );
  
  const contact2 = new Contact(
    'Rohit',
    's',
    '456 Mumbai',
    'India',
    'CA',
    '94103',
    '123-456-790',
    'rohitshinde.com'
  );
  
  addressBook.addContact(contact1);
  addressBook.addContact(contact2);
  console.log(contact1);
  console.log(contact2);
    