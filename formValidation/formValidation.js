const inputs = document.querySelectorAll('input');

const patterns = {
  telephone : /^\d{11}$/,
  username  : /^\D{5,12}$/,
  password  : /^[\w@-]{8,20}$/,
  email     : /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/,
}

const validate = (field, regex) => {
  if(regex.test(field.value)) {
    field.className = 'valid';
  }else {
    field.className = 'notValid';
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);//(grab input, name value from form)
  });
});
