/**
 * @name localstorage
 * @description Données persistantes dans le navigateur
 * @author ZB
 * @version 1.0
 **/

export default {
  save(key, value) {
    //on converti les données en string avant l'insertion
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key) {
    const value = localStorage.getItem(key);
    if (value != null) {
      //reconvertir le string json en valeurs js
      return JSON.parse(value);
    }

    return null;
  },
  delete() {},
};
