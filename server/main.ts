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
    //Accounts.createUserWithPhone({ phone: '+212666000000', profile: { name: 'Person 0' } });

  });
