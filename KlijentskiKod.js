function myFunction() {

    var broj = prompt("Unesite broj  od 1 do 5");
    var brojInt = parseInt(broj);

    if (brojInt >= 1 && brojInt <= 5) {
        alert("Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može.");
    }

    else if (brojInt < 1 || brojInt > 5) {
        alert("Uneseni broj mora biti izmedju 1 i 5!");

    }
    else {
        alert("Niste uneli broj!");
    }
}