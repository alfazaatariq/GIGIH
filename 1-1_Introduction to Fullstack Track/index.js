const email = document.getElementById('email');
const password = document.getElementById('password');
const onSubmitHandler = (event) => {
  event.preventDefault();

  // form validation

  if (email.value === '' || password.value === '') {
    alert('Email or Password can not be empty!');
    return;
  }

  if (password.value.length < 6) {
    alert('Password must be at least 6 characters!');
    return;
  }

  alert('Logged In successfully!');
};
