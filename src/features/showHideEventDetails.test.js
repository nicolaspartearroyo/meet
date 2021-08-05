import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {

});