const validateForm = () => {
  // Input fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const pax = document.getElementById('pax');
  const date = document.getElementById('date');
  const time = document.getElementById('time');
  const btnSubmit =document.getElementById('btn-submit');
  // other variables
  const error = document.getElementById('error-text');
  const today = new Date().setHours(0,0,0,0);
  const beforeLunch = new Date().setTime('12:00');
  const afterLunch = new Date().setTime('14:00');
  const beforeDiner = new Date().setTime('19:00');
  const afterDiner = new Date().setTime('22:30');
  // Form
  const form = document.getElementById('new_reservation');
  // Validation colors
  const green = '#4CAF50';
  const red = '#F44336';

  // Handle form
  form.addEventListener('blur', function(e) {
    // Prevent default behaviour
    e.preventDefault();
    if (
      validateName() &&
      validateEmail() &&
      validatePhone() &&
      validatePax() &&
      validateDate() &&
      validateTime()
    ) {
      alert('Réservation envoyée');
    } else {
      alert('Something is doing wrong !')
    }
    //
  });

  // Validators
  const validateName = () => {
    // check if is empty
    if (checkIfEmpty(name)) return;
    // is if it has only letters
    if (!checkIfOnlyLetters(name)) return;
    return true;
  }
  const validateEmail = () => {
    if (checkIfEmpty(email)) return;
    return true;
  }
  const validatePhone = () => {
    // check if is empty
    if (checkIfEmpty(phone)) return;
    // is if it has only numbers
    if (!checkIfOnlyNumbers(phone)) return;
    return true;
  }
  const validatePax = () => {
    if (checkIfEmpty(pax)) return;
    if (checkIfValidPax(pax)) return;
    return true;
  }
  const validateDate = () => {
    if (checkIfEmpty(date)) return;
    if (checkIfValidDate(date)) return;
    return true;
  }
  const validateTime = () => {
    if (checkIfEmpty(time)) return;
    if (checkIfValidTime(time)) return;
    return true;
  }

  // Utility functions

  const isEmpty = (value) => {
    if (value === '') return true;
    return false;
  }

  const setInvalid = (field, message) => {
    field.className = 'invalidata';
    error.textContent = message;
    error.style.color = 'red';
  }
  const setValid = (field) => {
    field.className = 'validata';
    error.textContent = 'Still good so far !';
    error.style.color = 'green';
  }
  const checkIfEmpty = (field) => {
    if (isEmpty(field.value.trim())) {
      // set field invalid
      setInvalid(field, `${field.name} Entrez votre nom`);
      return true;
    } else {
      // set field valid
      setValid(field);
      return false;
    }
  }
  const checkIfOnlyLetters = (field) => {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} uniquement en lettres`);
      return false;
    }
  }
  const checkIfOnlyNumbers = (field) => {
    if (/^[0-9 ]+$/.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} uniquement en chiffres`);
      return false;
    }
  }
  const containsCharacters = (field) => {
    if (/^[@ ]+$/.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} est incorrect`);
      return false;
    }
  }
  const checkIfValidPax = (field) => {
    if (0 < pax.value < 10) {
      setValid(field);
      return true;
    } else if (pax.value === 0) {
      setInvalid(field, `${field.name} minimum 1 personne !`);
      return false;
    } else {
      setInvalid(field, `${field.name} Pour + de 10 personnes, contacter-nous`);
      return false;
    }
  }
  const checkIfValidDate = (field) => {
    if (date.valueOf() - today.valueOf() > 1) {
      setValid(field);
      return true;
    } else if (date.valueOf() - today.valueOf() === 0) {
      setInvalid(field, `${field.name} Réservation pour aujourd'hui uniquement par téléphone`);
      return false;
    } else {
      setInvalid(field, `${field.name} est incorrecte !`);
      return false;
    }
  }
  const checkIfValidTime = (field) => {
    if (beforeLunch.valueOf() < time.valueOf() < afterLunch.valueOf() || beforeDiner.valueOf() < time.valueOf() < afterDiner.valueOf()) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} Lunch: 12-14h - Dinner: 19-22h30`);
      return false;
    }
  }
  const matchWithRegEx = (regEx, field, message) => {
    if (field.value.match(regEx)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, message);
      return false;
    }
  }
}






