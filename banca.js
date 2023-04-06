function calculeazaDepozit() {
  const sumaDobanda = document.getElementById("sumaDobanda").value;
  const rataDobanda = document.getElementById("rataDobanda").value;
  const perioadaDobanda = document.getElementById("perioadaDobanda").value;
  const dobanda = sumaDobanda * rataDobanda * perioadaDobanda / 100;
  const total = parseFloat(sumaDobanda) + parseFloat(dobanda);
  const rezultatDobanda = `Dobânda este: ${dobanda.toFixed(2)} MDL<br>Total spre plata: ${total.toFixed(2)} MDL`;
  document.getElementById("rezultatDobanda").innerHTML = rezultatDobanda;
}

function calculeazaCredit() {
  const sumaCredit = document.getElementById("sumaCredit").value;
  const rataCredit = document.getElementById("rataCredit").value;
  const perioadaCredit = document.getElementById("perioadaCredit").value;
  const rataLunara = rataCredit / 100 / 12;
  const plataLunara = sumaCredit * rataLunara / (1 - Math.pow(1 + rataLunara, -perioadaCredit));
  const totalPlatit = plataLunara * perioadaCredit;
  const dobanda = totalPlatit - sumaCredit;
  const rezultatCredit = `Plata lunară este: ${plataLunara.toFixed(2)} lei<br>Total de plătit: ${totalPlatit.toFixed(2)} MDL<br>Dobândă totală este: ${dobanda.toFixed(2)} MDL`;
  document.getElementById("rezultatCredit").innerHTML = rezultatCredit;
}

getElementById()
getElementsByTagName()