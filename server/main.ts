import { Profile } from './../imports/ui/utils/chat_logic/models';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages, Users } from '../imports/ui/utils/chat_logic/collections';
import { MessageType, Picture } from '../imports/ui/utils/chat_logic/models';

Meteor.startup(() => {
  if (Meteor.settings) {
    Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    SMS.twilio = Meteor.settings['twilio'];
  }

  if (Users.collection.find().count() > 0) { return; }
  data();

  });

//======================Fonction========================//
function data(){
 //==============================User-A========================//
  Accounts.createUserWithPhone({
          phone: '+212666000001',
          profile: {
                    name: 'person A' /*pictureId: picture._id*/ }
              });
 //==============================User-B========================//
  Accounts.createUserWithPhone({
    phone: '+212666000002',
    profile: { name: 'person B' }
  });
 //==============================User-C========================//
  Accounts.createUserWithPhone({
    phone: '+212666000003',
    profile: { name: 'person C' }
  });
 //==============================User-D========================//
  Accounts.createUserWithPhone({
    phone: '+212666000004',
    profile: { name: 'person D' }
  });
 //==============================User-E========================//
  Accounts.createUserWithPhone({
    phone: '+212666000005',
    profile: { name: 'person E' }
  });
 //==============================User-F========================//
  Accounts.createUserWithPhone({
    phone: '+212666000006',
    profile: { name: 'person n' }
  });
 //==============================User-E========================//
  Accounts.createUserWithPhone({
    phone: '+212666000007',
    profile: { name: 'person f' }
  });
  
}
