import types from '../../constants/ingredientTypes';
import {successMsgs, errorMsgs} from '../../constants/messages';

export default function(ingredientList){
  var isChowder = true;
  var checks = {}
  Object.keys(checkFunctions).map(function(key, i){
    var f = checkFunctions[key];
    checks[key] = f(ingredientList);
  });

  return checks;
}

export const checkFunctions = {
  xorCreamTomato: function(ingredientList){
    const cream = (getMatches(ingredientList, types.cream).length > 0);
    const tomato = (getMatches(ingredientList, types.tomato).length > 0);
    if(cream ? !tomato : tomato) {
      return {value: true, msg: "Chowder contains one of tomato or dairy"}
    } else if (cream==true && tomato==true) {
      return {value: false, msg: "Chowder can't contain both tomato and dairy"}
    } else {
      return {value: false, msg: "Chowder must contain one of tomato or dairy"}
    }
  },
  orCornSeafood: function(ingredientList){
    const corn = (getMatches(ingredientList, types.corn).length > 0);
    const seafood = (getMatches(ingredientList, types.seafood).length > 0);
    if (corn==true||seafood==true){
      return {value: true, msg: "Contains one of corn or seafood"}
    } else {
      return {value: false, msg: "Must contain at least one of corn or seafood"}
    };
  },
  hasPotato: function(ingredientList){
    const potato = (getMatches(ingredientList, types.potato).length > 0);
    if(potato==true){
      return {value: true, msg: "Contains potato"}
    } else {
      return {value: false, msg: "Must contain potato"}
    }
  },
  noBlacklisted: function(ingredientList){
    const blacklisted = getMatches(ingredientList, types.blacklisted);
    if(blacklisted.length==0){
      return {value: true, msg: "No blacklisted items"}
    } else {
      return {value: false, msg: "Contains blacklisted items: " + blacklisted.join(', ')};
    }
  }
}

export function getMatches(list, options){
  var matches = [];
  list.map((item) => {
    options.map((option) => {
      if ((item.text.toLowerCase().indexOf(option) >= 0)
        || (option.indexOf(item.text.toLowerCase()) >= 0)) {
        matches.push(item);
      }
    });
  });
  return matches;
}
