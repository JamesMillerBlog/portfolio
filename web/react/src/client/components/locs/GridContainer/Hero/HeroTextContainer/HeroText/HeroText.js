import React from 'react';
import heroTextConfig from './assets/config/heroTextConfig.js';
import './assets/scss';

/*
1. edit updateHero function to update the text by each char
  - change returntext into returnchar
  - iterate over each char and create copy of old char + return new char
2. on each char added, animate out old and animate in new char
*/

const HeroText = ({ activeHero, scrolledItem, deviceType, allowedAnimation }) => {
  const setHeroStyle = (selectedIcon, selectedItem) => {
		if (selectedItem === null) return 'heroLogo';
		if (selectedIcon === 'none' && selectedItem === 4) return 'heroLogo';
    if (allowedAnimation || selectedItem !== 4) {
      if (selectedIcon === 'topLeftIcon') return 'heroEmailText';
      return 'heroIconText';
    }
    return 'heroLogo';
	};

  const heroText = (activeHeroText, selectedItem) => {
    if (selectedItem === 4) {
      if (allowedAnimation) return updateHero(activeHeroText, selectedItem);
      return updateHero('none', null);
    }
    return updateHero(activeHeroText, selectedItem);
	};

  const updateHero = (activeHeroText, selectedItem) => {
    let returntext;
    Reflect.ownKeys(heroTextConfig).forEach(key => {
      if (selectedItem === 4 || selectedItem === null) {
        if (activeHeroText === key) {
          returntext = heroTextConfig[confirmLaptop(key)].map((character, index) => (
            checkCharForSpace(character, index)
          ));
        }
      } else if (`item${selectedItem}` === key) {
        returntext = heroTextConfig[confirmLaptop(key)].map((character, index) => (
          checkCharForSpace(character, index)
        ));
      }
    });
    return returntext;
  };

  const checkCharForSpace = (character, index) => {
		if (character === ' ') {
			return <span key={index} className="herotext start space"> {character} </span>;
		}
		return <span key={index} className="herotext start"> {character} </span>;
	};

  const confirmLaptop = (key) => {
		let newKey;
		if (deviceType !== 'laptop') newKey = 'none';
		else newKey = key;
		return newKey;
	};

  return (
    <h1 className={setHeroStyle(activeHero, scrolledItem)}>
      { heroText(activeHero, scrolledItem) }
    </h1>
  );
};

export default HeroText;
