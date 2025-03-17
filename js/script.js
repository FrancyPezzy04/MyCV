function chooseLanguage(x) {
  if (x == "IT") 
  {
    document.getElementById(x).classList.add("choosed-language");
    document.getElementById("EN").classList.remove("choosed-language");
  } else 
  {
    document.getElementById(x).classList.add("choosed-language");
    document.getElementById("IT").classList.remove("choosed-language");
  }
}

  document.getElementById("current-year").textContent = new Date().getFullYear();
  
  const birthYear = 2004;
  const birthMonth = 12;
  const birthDay = 20;

  const age = calculateAge(birthYear, birthMonth, birthDay);

  const birthdaySpan = document.getElementById('birthday');
  birthdaySpan.textContent = age;
  function calculateAge(birthYear, birthMonth, birthDay) {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

