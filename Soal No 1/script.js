function $(el) {
  return document.querySelector(el);
}

const form = $('#hitung-nilai');
const hitung = $('#hitung');

function hitungNilai(e) {
  e.preventDefault();

  const presensi = $('#presensi').value;
  const nilaiUts = $('#nilaiUts').value;
  const nilaiUas = $('#nilaiUas').value;
  const nilaiTugas = $('#nilaiTugas').value;

  let nilaiAkhir = (presensi / 14) * 10 + nilaiUts * 0.3 + nilaiUas * 0.4 + nilaiTugas * 0.2 || 0;
  let nilaiHuruf = nilaiAkhir >= 80 ? 'A' : nilaiAkhir <= 80 && nilaiAkhir > 60 ? 'B' : nilaiAkhir <= 60 && nilaiAkhir > 40 ? 'C' : nilaiAkhir <= 40 && nilaiAkhir > 20 ? 'D' : nilaiAkhir < 20 ? 'E' : 'E' || 'E';

  $('#nilaiAkhir').value = nilaiAkhir.toFixed(2) * 1;
  $('#nilaiHuruf').value = nilaiHuruf;
}

form.addEventListener('submit', hitungNilai, true);
hitung.addEventListener('click', hitungNilai, true);
