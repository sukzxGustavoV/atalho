function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
  
document.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.key === "b") {
        window.location.href = "https://www.americanas.com.br/produto/2839441717/pc-gamer-completo-hercules-intel-i3-3o-ger-gt-730-4gb-8gb-hd-500gb-wi-fi";
    }
    if (event.ctrlKey && event.key === "i") {
        window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25Bdrs-H8JgkLTwXpOctHfR8Jk9nPQXf7rHOFhGqHJHZsRn6U");
    }
    if (event.ctrlKey && event.key === "m") {
        document.getElementById("message").focus();
    }
});