import { NAME } from "./constants";

export const getSound = state => state[NAME].hasSound;

export const getSoundVolume = state => state[NAME].soundVolume;

export const getVibration = state => state[NAME].hasVibration;
