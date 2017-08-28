import { NAME } from "./constants";

export const getId = state => state[NAME].id;

export const getEmailAddress = state => state[NAME].emailAddress;

export const getFirstName = state => state[NAME].firstName;

export const getSurname = state => state[NAME].surname;

export const getGender = state => state[NAME].gender;

export const getPhoneNumber = state => state[NAME].phoneNumber;

export const getBirthDate = state => state[NAME].birthDate;

export const getOccupation = state => state[NAME].occupation;

export const getProfileImage = state => state[NAME].profileImage;

export const getCreatedOn = state => state[NAME].createdOn;

export const getLastLoggedIn = state => state[NAME].lastLoggedIn;

export const isLoggedIn = state => state[NAME].isLoggedIn;
