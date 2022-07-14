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


