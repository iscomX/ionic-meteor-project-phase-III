import { Meteor } from 'meteor/meteor';

export const DEFAULT_PICTURE_URL = '/chat_assets/default-profile.svg';

export interface Profile {
  name?: string;
  picture?: string;
  pictureId?: string;
}

export enum MessageType {
  TEXT = <any>'text',
  LOCATION = <any>'location',
  PICTURE = <any>'picture'
}

export interface Chat {
  _id?: string;
  title?: string;
  picture?: string;
  lastMessage?: Message;
  memberIds?: string[];
}

export interface Message {
  _id?: string;
  chatId?: string;
  senderId?: string;
  content?: string;
  createdAt?: Date;
  ownership?: string;
  type?: MessageType;
}

export interface User extends Meteor.User {
  profile?: Profile;
}

export interface Location {
  lat: number;
  lng: number;
  zoom: number;
}

export interface Picture {
  _id?: string;
  complete?: boolean;
  extension?: string;
  name?: string;
  progress?: number;
  size?: number;
  store?: string;
  token?: string;
  type?: string;
  uploadedAt?: Date;
  uploading?: boolean;
  url?: string;
  userId?: string;
}
