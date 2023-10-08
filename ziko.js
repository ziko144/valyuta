function myFunction() {
    let AZN = prompt('Manat')
    let dollar = AZN / 1.7
    let netice = AZN + ' AZN = ' + dollar + ' $ ';
    document.getElementById('ziko').innerHTML = netice;
}

function myFunction2() {
    let manat = prompt('Manat')
    let euro = manat / 1.8
    let netice = manat + ' AZN = ' + euro + ' euro ';
    document.getElementById('lq').innerHTML = netice;
}
function myFunction3() {
    let manat = prompt('Manat')
    let TL = manat * 16.25
    let netice = manat + ' AZN = ' + TL + ' TL ';
    document.getElementById('zakir').innerHTML = netice;
}