import { NAME } from "./constants";

export const getSound = state => state[NAME].sound;

export const getSoundVolume = state => state[NAME].soundVolume;

export const getVibration = state => state[NAME].vibration;
