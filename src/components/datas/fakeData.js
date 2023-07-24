import layananUnggulanImg from "../../assets/images/LAYANAN-UNGGULAN.png";
import rawatInapImg from "../../assets/images/ranap-icon.png";
import rawatJalanImg from "../../assets/images/rajal-icon.png";
import layananIGDImg from "../../assets/images/igd-icon.png";
import penunjangMedikImg from "../../assets/images/penunjang-medik-icon2.png";
import medicalCheckupImg from "../../assets/images/penunjang-medik-icon.png";
import fasilitasUmumImg from "../../assets/images/fasilitas-umum.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faWhatsappSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";

import imageMaklumatIGD from "../../assets/images/standar-pelayanan-IGD.png";
import imageMaklumatRajal from "../../assets/images/standar-pelayanan-RAJAL.png";
import imageMaklumatRanap from "../../assets/images/standar-pelayanan-rawat-inap.png";
import imageMaklumatRadiologi from "../../assets/images/standar-pelayanan-Radiologi-1.png";
import imageMaklumatLaborat from "../../assets/images/standar-pelayanan-Laboratorium.png";
import imageMaklumatRehab from "../../assets/images/standar-pelayanan-rehab-medik.png";
import imageMaklumatFarmasi from "../../assets/images/standar-pelayanan-farmasi.png";
import imageMaklumatGizi from "../../assets/images/standar-pelayanan-farmasi.png";
import imageMaklumatRumahSakit from "../../assets/images/RS-1024x683.png";
import imageMaklumatIntensif from "../../assets/images/intensif-1024x683.png";
import imageMaklumatIBS from "../../assets/images/IBS-1024x683.png";
import imageMaklumatRekamMedic from "../../assets/images/rekam-medik-1024x683.png";
import imageMaklumatAmbulans from "../../assets/images/ambulans-1024x683.png";
import imageMaklumatJenazah from "../../assets/images/JENAZAH-1024x683.png";
import imageMaklumatKesling from "../../assets/images/KESLING-1024x683.png";
import imageMaklumatPPI from "../../assets/images/PPI-1024x683.png";
import imageMaklumatPembayaran from "../../assets/images/maklumat-pembayaran-pihak-3-1024x683.png";
import imageMaklumatPulang from "../../assets/images/maklumat-pasien-pulang-1024x683.png";
import imageMaklumatLaundry from "../../assets/images/LAUNDRY-1024x683.png";
import imageMaklumatHumas from "../../assets/images/maklumat-humas-1024x683.png";
import wbkGizi from "../../assets/images/SOSIALISASI-GIZI-2-1024x797.png";
import wbkSatpam from "../../assets/images/SOSIALISASI-SATPAM-1024x822.png";
import wbkGudang from "../../assets/images/GUDANG-1024x799.png";
import wbkPerawat from "../../assets/images/PERAWAT-1024x734.png";
import wbkCM from "../../assets/images/CM-1024x782.png";
import wbkIGD from "../../assets/images/IGD-2-1024x789.png";
import wbkFisio from "../../assets/images/SOSIALISASI-FISIO-1024x781.png";
import wbkFarmasi from "../../assets/images/FARMASI-2-1024x795.png";
import wbkKeuangan from "../../assets/images/KEUANGAN-1024x770.png";
import slide1 from "../../assets/images/slider/slide-1.png";
import slide2 from "../../assets/images/slider/2.png";
import slide3 from "../../assets/images/slider/3.png";
import slide4 from "../../assets/images/slider/1-6.png";
import slide5 from "../../assets/images/slider/PERAWAT-1024x734.png";
import slide6 from "../../assets/images/slider/slide-admedika-3 (1).png";
import slide7 from "../../assets/images/slider/slide-admedika-3.png";

export const slider = [
  {
    image: slide1,
    label: "",
  },
  {
    image: slide2,
    label: "",
  },
  {
    image: slide3,
    label: "",
  },
  {
    image: slide4,
    label: "",
  },
  {
    image: slide5,
    label: "",
  },
  {
    image: slide6,
    label: "",
  },
  {
    image: slide7,
    label: "",
  },
];

export const info = [
  { url: "https://daftaronline.rspaw.or.id/", title: "daftar online" },
  { url: "/jadwal-dokter", title: "jadwal dokter" },
  { url: "/info-tempat-tidur-online", title: "info tempat tidur" },
  { url: "/tarif-pelayanan", title: "tarif layanan" },
  { url: "/eperfect", title: "majalah e-perfect" },
  {
    url: "https://forms.gle/EEitccyxm3GPZA3w8",
    title: "lowongan pekerjaan",
  },
  { url: "", title: "bahan makanan penukar" },
];

export const services = [
  {
    title: "Unggulan",
    url: "/layanan-cryosurgery",
    img: layananUnggulanImg,
    features: true,
    type: "top-service",
  },
  {
    title: "Rawat Inap",
    url: "/layanan-rspaw/rawat-inap",
    img: rawatInapImg,
    type: "general",
  },
  {
    title: "Rawat Jalan",
    url: "/layanan-rspaw/rawat-jalan",
    img: rawatJalanImg,
    type: "general",
  },
  {
    title: "Layanan IGD",
    url: "/layanan-rspaw/instalasi-gawat-darurat",
    img: layananIGDImg,
    type: "general",
  },
  {
    title: "Penunjang Medik",
    url: "/layanan-rspaw/penunjang-medik",
    img: penunjangMedikImg,
    type: "general",
  },
  {
    title: "Medical Check Up",
    url: "/medical-checkup",
    img: medicalCheckupImg,
    type: "general",
  },
  {
    title: "Fasilitas Umum",
    url: "/fasilitas-umum",
    img: fasilitasUmumImg,
    type: "general",
  },
  {
    title: "Penyalahgunaan Wewenang",
    url: "/spi/penyalahgunaan-wewenang-pegawai-rspaw",
    img: fasilitasUmumImg,
    type: "complaint",
  },
  {
    title: "Layanan Pengaduan",
    url: "/layanan-pengaduan",
    img: fasilitasUmumImg,
    type: "complaint",
  },
  {
    title: "Survey Kepuasan Pelanggan",
    url: "/survey-kepuasan-pelanggan",
    img: fasilitasUmumImg,
    type: "complaint",
  },
  {
    title: "Wishtle Blowing System",
    url: "/spi/wbs-rspaw",
    img: fasilitasUmumImg,
    type: "complaint",
  },
  {
    title: "SP4N Lapor",
    url: "/sistem-pengelolaan-pengaduan-pelayanan-publik-nasional-sp4n-layanan-aspirasi-dan-pengaduan-online-rakyat-lapor",
    img: fasilitasUmumImg,
    type: "complaint",
  },
];

export const newsinfo = [
  {
    post_title: "Penerimaan TTK Mitra",
    post_content: ` `,
    // author: "Humas RSPAW",
    post_date: new Date("07/24/2023"),
    post_image: "-",
    post_group: "post",
    post_status: "1",
    // type: "news",
    // id: "news1",
    post_url: "/pdf/Penerimaan_TTK_Mitra",
  },
  // {
  //   title:
  //     "Kemenkes Meminta Dokter dan Tenaga Kesehatan Tidak Meninggalkan Pelayanan Pasien",
  //   description: `
  //     <p>Sehubungan dengan adanya himbauan aksi damai terkait penolakan pembahasan RUU Kesehatan dari lima organisasi profesi, Kementerian Kesehatan meminta agar para dokter, dokter gigi, perawat, bidan dan apoteker tidak meninggalkan pelayanan mereka kepada masyarakat.</p><p>Adapun lima Organisasi profesi dimaksud yaitu Ikatan&nbsp;Dokter&nbsp;Indonesia (IDI), Persatuan Perawat Nasional Indonesia (PPNI), Ikatan Bidan Indonesia (IBI), Persatuan Dokter Gigi Indonesia (PDGI), dan Ikatan Apoteker Indonesia (IAI).</p><p>Juru Bicara Kementerian Kesehatan dr. Mohammad Syahril mengatakan mengungkapkan pendapat merupakan hal yang biasa, namun jangan sampai partisipasi mereka dalam demonstrasi di hari Senin, 8 Mei serta rencana pemogokan massal untuk melayani pasien di beberapa hari ke depan mengorbankan kepentingan masyarakat yang lebih luas.</p><p>“Layanan pasien harus diprioritaskan. Marilah teman sejawat mengingat sumpah kita: Saya akan membaktikan hidup saya guna kepentingan peri kemanusiaan, dan Saya akan senantiasa mengutamakan kesehatan pasien,” kata dr. Syahril.</p><p>dr. Syahril juga mengatakan, sesuai dengan Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipil serta ketentuan lain yang berlaku pada masing-masing fasilitas pelayanan kesehatan, Kemenkes meminta agar para dokter dan tenaga kesehatan yang bertugas di Rumah Sakit dan unit layanan Kemenkes untuk tidak meninggalkan tugas memberikan pelayanan pada jam kerja tanpa adanya alasan yang sah dan izin dari pimpinan satuan kerja.</p><p>Salah satu tuntutan dari para pendemo adalah RUU Kesehatan seolah-olah berpotensi memicu kriminalisasi kepada dokter dan tenaga kesehatan. Menurut dr. Syahril, hal ini sangat tidak beralasan.</p><p>“Janganlah kita memprovokasi seolah-olah ada potensi kriminalisasi. Itu tidak benar. Justru RUU Kesehatan ini menambah perlindungan baru, termasuk dari dari upaya-upaya kriminalisasi. Kita niatnya melindungi, kok malah didemo,” kata dr. Syahril.</p><p>RUU Kesehatan saat ini sedang tahap pembahasan antara DPR RI dengan pemerintah. Melalui RUU ini, pemerintah mengusulkan tambahan perlindungan hukum untuk dokter, perawat, bidan dan tenaga kesehatan lainnya ketika memberikan pelayanan kepada masyarakat.</p><p>“Pasal-pasal perlindungan hukum ditujukan agar jika ada sengketa hukum, para tenaga kesehatan tidak langsung berurusan dengan aparat penegak hukum sebelum adanya penyelesaian diluar pengadilan, termasuk melalui sidang etik dan disiplin,” tutur dr. Syahril.</p><p>Menurut Syahril, terdapat beberapa pasal baru perlindungan hukum yang diusulkan pemerintah, seperti pelindungan hukum bagi peserta didik, hak menghentikan pelayanan jika mendapatkan tindak kekerasan, dan pelindungan hukum pada kondisi tertentu seperti wabah.</p><p>Berita ini disiarkan oleh Biro Komunikasi dan Pelayanan Publik, Kementerian Kesehatan RI. Untuk informasi lebih lanjut dapat menghubungi nomor hotline Halo Kemenkes melalui nomor hotline 1500-567, SMS 081281562620 dan alamat email kontak@kemkes.go.id (NI).</p><p>Kepala Biro Komunikasi dan Pelayanan Publik</p><p>dr. Siti Nadia Tarmizi, M.Epid</p>`,
  //   author: "Humas RSPAW",
  //   date: new Date(),
  //   image: "images/blog/news2.jpg",
  //   type: "news",
  //   id: "news2",
  // },
  // {
  //   title:
  //     "RUU Kesehatan Tambah Perlindungan Hukum Bagi Dokter, Perawat, Bidan, dll",
  //   description: `<p>RUU Kesehatan saat ini sedang tahap pembahasan antara DPR RI dengan pemerintah. Melalui RUU ini, pemerintah mengusulkan tambahan perlindungan hukum untuk dokter, perawat, bidan dan tenaga kesehatan lainnya ketika memberikan pelayanan kepada masyarakat.</p><p>“Dalam undang-undang yang berlaku saat ini memang perlindungan hukum untuk dokter, perawat, bidan dan tenaga kesehatan lainnya masih belum maksimal. Untuk itu dalam RUU ini akan kita usulkan untuk ditambah. Jadi tidak benar informasi yang beredar kalau RUU menghilangkan perlindungan. Kita justru menambah,” kata juru bicara Kementerian Kesehatan dr Mohammad Syahril, Senin (24/04).</p><p>“Pasal-pasal perlindungan hukum ditujukan agar jika ada sengketa hukum, para tenaga kesehatan tidak langsung berurusan dengan aparat penegak hukum sebelum adanya penyelesaian diluar pengadilan, termasuk melalui sidang etik dan disiplin,” tutur dr. Syahril.</p><p>Menurut Syahril, terdapat beberapa pasal baru perlindungan hukum yang diusulkan pemerintah, antara lain:</p><p>Pertama, Penyelesaian Sengketa Diluar Pengadilan yang tertuang dalam pasal 322 ayat 4 DIM pemerintah. Pasal ini mengatur tenaga Medis atau Tenaga Kesehatan yang telah melaksanakan sanksi disiplin yang dijatuhkan terdapat dugaan tindak pidana, aparat penegak hukum wajib mengutamakan penyelesaian perselisihan dengan mekanisme keadilan restoratif.</p><p>Kedua, Perlindungan Untuk Peserta Didik yang tertuang dalam pasal 208E ayat 1 huruf a DIM pemerintah. Pasal ini mengatur peserta didik yang memberikan pelayanan kesehatan berhak memperoleh bantuan hukum dalam hal terjadinya sengketa medik selama mengikuti proses pendidikan.</p><p>Ketiga, Anti-Bullying yang tertuang dalam dua pasal. Pasal 282 ayat 2 DIM pemerintah mengatur Tenaga Medis dan Tenaga Kesehatan dapat menghentikan pelayanan kesehatan apabila memperoleh perlakuan yang tidak sesuai dengan harkat dan martabat manusia, moral, kesusilaan, serta nilai-nilai sosial budaya, termasuk tindakan kekerasan, pelecehan, dan perundungan. Pasal 208E ayat 1 huruf d DIM pemerintah, mengatur peserta didik yang memberikan pelayanan kesehatan mendapat perlindungan dari kekerasan fisik, mental, dan perundungan.</p><p>Keempat, Proteksi Dalam Keadaan Darurat. Teruang dalampasal 408 ayat 1 DIM pemerintah, dimana Tenaga Medis dan Tenaga Kesehatan yang melaksanakan upaya Penanggulangan KLB dan Wabah berhak atas pelindungan hukum dan keamanan serta jaminan kesehatan dalam melaksanakan tugasnya. Dan tertuang dalam pasal 448B DIM pemerintah, dimana Tenaga Medis atau Tenaga Kesehatan yang melakukan aborsi karena indikasi kedaruratan medis atau terhadap korban tindak pidana perkosaan atau tindak pidana kekerasan seksual lain yang menyebabkan kehamilan tidak dipidana.</p><p>Selain itu, pasal-pasal perlindungan hukum yang saat ini berlaku di undang-undang yang ada juga turut diadopsi dan tidak ada yang dikurangi. Antara lain:</p><p>Tenaga Medis dan Tenaga Kesehatan dalam menjalankan praktik berhak mendapatkan pelindungan hukum sepanjang melaksanakan tugas sesuai dengan standar profesi, standar pelayanan profesi, dan standar prosedur operasional, dan etika profesi serta kebutuhan kesehatan Pasien, pada pasal 282 ayat (1) huruf a.</p><p>Dalam hal Tenaga Medis atau Tenaga Kesehatan diduga melakukan kesalahan dalam menjalankan profesinya yang menyebabkan kerugian kepada Pasien, perselisihan yang timbul akibat kesalahan tersebut diselesaikan terlebih dahulu melalui alternatif penyelesaian sengketa di luar pengadilan, pada pasal 327.</p><p>Pemerintah menjamin pelindungan hukum bagi setiap orang dan Fasilitas Pelayanan Kesehatan yang memberikan Pelayanan Kesehatan pada bencana, pada pasal 141.</p><p>Dalam keadaan tertentu, Tenaga Medis dan Tenaga Kesehatan dapat memberikan pelayanan di luar kewenangannya, pada pasal 296 ayat 1.</p><p>Rumah Sakit bertanggung jawab secara hukum terhadap semua kerugian yang ditimbulkan atas kelalaian yang dilakukan oleh Tenaga Medis dan Tenaga Kesehatan Rumah Sakit, pada pasal 188.</p><p>Berita ini disiarkan oleh Biro Komunikasi dan Pelayanan Publik, Kementerian Kesehatan RI. Untuk informasi lebih lanjut dapat menghubungi nomor hotline Halo Kemenkes melalui nomor hotline 1500-567, SMS 081281562620 dan alamat email kontak@kemkes.go.id</p><p>Kepala Biro Komunikasi dan Pelayanan Publik</p><p>dr. Siti Nadia Tarmizi, M.Epid</p><p>Jakarta, 24 April 2023</p> `,
  //   author: "Humas RSPAW",
  //   date: new Date(),
  //   image: "images/blog/news3.jpeg",
  //   type: "news",
  //   id: "news1",
  // },
];

export const contactUs = {
  address: "Jl. Hasanuddin No. 806 Salatiga Jawa Tengah, Indonesia",
  phone: "(0298) 326130",
  fax: "(0298) 322703",
  email: "rspariowirawan@gmail.com",
  url: "humas@rspaw.or.id",
};

export const schedule = {
  title:
    '<h4 style="text-align: center;">JADWAL<strong>&nbsp;BESUK</strong></h4>',
  description:
    '<div style="text-align: center;"><strong>&nbsp;</strong></div><h4 style="text-align: center;"><strong>Kami Informasikan untuk Jam Besuk adalah sebagai berikut :</strong></h4><div style="text-align: center;"><strong>&nbsp;</strong></div><h4 style="text-align: center;"><strong>Pagi&nbsp; : Pukul 10.00 &ndash; 12.00 WIB</strong></h4><h4 style="text-align: center;">Sore : Pukul 17.00 &ndash; 19.00 WIB</h4><div style="text-align: center;"><strong>&nbsp;</strong></div><h4 style="text-align: center;"><strong>MOHON PERHATIAN KEPADA SEMUA PENGUNJUNG&nbsp;</strong><strong>UNTUK TETAP MEMATUHI PROTOKOL KESEHATAN</strong></h4>',
};

export const socmedFooter = [
  {
    name: "facebook",
    url: "https://www.facebook.com/RSPAWSalatigaOfficial",
    color: "#3b5998",
  },
  {
    name: "twitter",
    url: "https://twitter.com/rspawsalatiga",
    color: "#1da1f2",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/rspawsalatiga/?hl=id",
    color: "#F2006E",
  },
  {
    name: "whatsapp",
    url: "https://wa.me/6285740058522",
    color: "#25d366",
  },
];

export const socmed = [
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UCp7d0r31ov6CkxRh8rxblHQ",
    color: "#cd201f",
  },
  {
    name: "email",
    url: "mailto:humas.rspaw@gmail.com",
    color: "#56AC00",
  },
];

export const iconsSocmed = {
  facebook: <FontAwesomeIcon className="fa-xl" icon={faFacebookSquare} />,
  twitter: <FontAwesomeIcon className="fa-xl" icon={faTwitterSquare} />,
  instagram: <FontAwesomeIcon className="fa-xl" icon={faInstagramSquare} />,
  whatsapp: <FontAwesomeIcon className="fa-xl" icon={faWhatsappSquare} />,
  youtube: <FontAwesomeIcon className="fa-xl" icon={faYoutubeSquare} />,
  email: <FontAwesomeIcon className="fa-xl" icon={faEnvelopeSquare} />,
};

export const history =
  '<p style="text-align:start;">Sebelumnya bernama RSTP Ngawen Salatiga. Pada awal berdiri di tahun 1934,  rumah sakit ini berfungsi sebagai tempat petirahan bagi penderita kesehatan paru yang pada masa itu lebih banyak didominasi oleh warga keturunan Belanda.</p><p style="text-align:start;">Dari fungsi awal tersebut, sampai saat ini masih banyak anggota masyarakat yang menyebutnya dengan Sanatorium. Pendirian Sanatorium tersebut dilatarbelakangi dengan kondisi udara yang sejuk karena secara geografis daerah Ngawen Salatiga memiliki ketinggian  kurang lebih 800 meter dari permukaan air laut dengan suhu udara berkisar antara 18 – 29  C.</p><p style="text-align:start;">Kondisi tersebut dianggap sangat ideal sebagai tempat petirahan bagi masyarakat Belanda yang terganggu kesehatan parunya oleh karena wilayah Salatiga, Ambarawa, dan sekitarnya banyak ditinggali oleh warga negara Belanda, mengingat kota Salatiga dan sekitarnya merupakan daerah konsentrasi militer/tentara Belanda dengan status sebagai daerah gemeente/kota praja.</p><p></p><img src="https://rspaw.or.id/wp-content/uploads/2022/09/WhatsApp-Image-2017-11-28-at-10.47.11-AM-768x510.jpeg" alt="undefined" style="float:none;height: 300px;width: auto; margin:auto"/><p style="text-align:start;">Memasuki masa penjajahan Jepang, fungsi sanatorium ini masih tetap berlanjut, hanya   penggunaannya  sudah  mulai  dimanfaatkan  oleh  warga  negara   Indonesia (pribumi), meskipun pada saat itu pemberian pelayanan kesehatan belum juga dilaksanakan. Baru pada tahun 1952 meskipun masih dengan sebutan sanatorium, sudah mulai mulai dilakukan pemberian pelayanan ditandai dengan  adanya  tenaga dokter, paramedis, dan peralatan untuk pengobatan penyakit TBC.</p><p style="text-align:start;">Sejalan dengan kebutuhan akan penanggulangan penyakit paru yang pada masa – masa tersebut memiliki angka kesakitan yang cukup tinggi, fungsi sanatorium dengan pemberian pelayanan ditegaskan lagi dengan penyebutan institusi ini sebagai Rumah Sakit Paru – Paru.</p><p style="text-align:start;">Rumah Sakit ini secara kelembagaan berada di bawah <a href="http://www.depkes.go.id/" target="_blank">Departemen Kesehatan RI</a> yang saat ini disebut dengan Kementerian Kesehatan, dengan struktur organisasi tidak jelas.</p><p style="text-align:start;">Baru pada tahun 1978 dengan Surat Keputusan Menteri Kesehatan RI Nomor  : 137/MenKes/SK/IV/1978 ditetapkan Struktur Organisasi yang lebih jelas tugas pokok dan fungsinya yaitu sebagai rumah sakit khusus yang menyelenggarakan pelayanan terhadap penderita penyakit TB paru, dengan sebutan RSTP. Beberapa sanatorium di Jawa Tengah yang ditetapkan sebagai RSTP hanya RSTP “Ngawen” Salatiga dan RSTP Kalibakung Slawi Tegal, sedangkan 3 ( tiga ) eks sanatorium, masing-masing di Semarang, Klaten, dan Purwokerto dikonversi dengan Rumah Sakit Umum.</p><p></p><img src="https://rspaw.or.id/wp-content/uploads/2022/09/Pdture1.jpg" alt="undefined" style="float:none;height: 300px;width: auto; margin:auto"/><p><span style="color: rgb(55,0,10);background-color: rgb(255,255,255);font-size: 18px;font-family: Karla, sans-serif;">Selanjutnya pada tanggal 26 September 2002, dengan Surat Keputusan Menteri Kesehatan RI, nomor 1208/Menkes/SK/IX/2002, RSTP “Ngawen” Salatiga berubah nama menjadi Rumah Sakit Paru dr. Ario Wirawan Salatiga, dan merupakan satu-satunya rumah sakit paru di Provinsi Jawa Tengah.</span></p><p></p><img src="https://rspaw.or.id/wp-content/uploads/2022/09/download-1.jpg" alt="undefined" style="float:none;height: 300px;width: auto; margin:auto"/><p style="text-align:start;">Peluang ini menjadikan Rumah Sakit Paru dr. Ario Wirawan Salatiga memiliki kesempatan untuk berkembang menjadi rumah sakit, dengan cakupan wilayah yang cukup luas yaitu wilayah Jawa Tengah dan Provinsi lain yang tidak memiliki RSTP.  Peluang ini bertambah besar bila ditinjau dari letak Rumah Sakit Paru dr. Ario Wirawan Salatiga yang berlokasi diantara 3 (tiga) kota besar yaitu Semarang, Yogyakarta, dan Surakarta, dimana ketiga kota tersebut diharapkan mampu mendukung keberadaan Rumah Sakit Paru dr. Ario Wirawan Salatiga baik dalam pengadaan SDM, sarana, maupun prasarana.</p><p style="text-align:start;">Perubahan situasi dan kondisi serta perilaku hidup masyarakat mengisyaratkan, bahwa ke depan seharusnya Rumah Sakit Paru dr. Ario Wirawan Salatiga kembali pada fungsi dan tugas pokok melaksanakan dan penanggulangan dan penyembuhan penyakit paru (tidak sebatas penanggulangan dan penyembuhan penyakit TB Paru saja). Tugas ini secara riil telah dilakukan oleh Rumah Sakit Tuberkulosa Paru- Paru “Ngawen” Salatiga.</p><p style="text-align:start;">Kemudian dengan terbitnya SK Menkes RI tanggal 26 Pebruari 2004 Nomor : 190/MENKES/SK/II/2004 tentang Organisasi dan Tata Kerja Rumah Sakit Paru, yang meningkatkan tingkat eselonisasi menjadi eselon IIb, hal ini membawa konsekuensi bertambahnya beban kerja, kebutuhan dana SDM, serta lebih luasnya cakupan pelayanan.</p><p style="text-align:start;">Kemudian tahun 2004 terbit SK Menkes RI tanggal 26 Pebruari 2004 Nomor: 190/MENKES/SK/II/2004 tentang Organisasi dan Tata Kerja Rumah Sakit Paru, yang membawa konsekuensi bertambahnya beban kerja, kebutuhan dana dan SDM, serta lebih luasnya cakupan pelayanan, dengan nama RSP dr. Ario Wirawan Salatiga, sebagai rumah sakit eselon IIb.</p><p></p><img src="https://rspaw.or.id/wp-content/uploads/2022/09/Picturfdfe1.jpg" alt="undefined" style="float:none;height: 300px;width: auto; margin:auto"/><p style="text-align:start;">Kebijakan pemerintah selanjutnya, dalam hal ini Departemen Kesehatan RI menetapkan bahwa Unit Pelaksana Teknis (UPT) Depkes RI sebagai Instansi Pemerintah yang menerapkan Pola Pengelolaan Keuangan Badan Layanan Umum (PPK-BLU) berdasarkan SK Menteri Keuangan no.274/KMK.05/2007 tanggal 21 Juni 2007 dan SK Menteri Kesehatan No. 756/Menkes/SK/VI/2007 tanggal 26 Juni 2007.</p><p style="text-align:start;">Perkembangan selanjutnya dengan diterbitkannya Permenkes Nomor 249/Menkes/Per/III/2008, tentang Organisasi dan Tata Kerja Rumah Sakit Paru dr. Ario Wirawan Salatiga mempunyai kesempatan untuk lebih berkembang, hal ini juga didukung dengan keluarnya SK Menteri Kesehatan RI Nomor 438/Menkes/SK/VI/2009 tanggal 18 Juni 2009, tentang Peningkatan Kelas Rumah Sakit Paru dr. Ario Wirawan Salatiga menjadi Rumah Sakit Khusus Kelas A, sehingga <a href="http://www.rspaw.or.id/" target="_self">Rumah sakit Paru dr. Ario Wirawan Salatiga</a> dapat lebih fleksibel dalam melaksanakan pengelolaan keuangan, peningkatan dan pengembangan pelayanan guna memberikan pelayanan kesehatan kepada masyarakat secara paripurna.</p><p></p><img src="https://rspaw.or.id/wp-content/uploads/2022/09/P1110109small-768x512.jpg" alt="undefined" style="float:none;height: auto;width: auto; margin:auto"/><p style="text-align:center;"><span style="color: rgb(146,146,146);background-color: rgb(255,255,255);font-size: 14.4;font-family: Karla, sans-serif;">RSP dr. Ario Wirawan Saat Ini</span></p>';

export const SP4N =
  '<p style="text-align:justify;">Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N) – Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!) adalah layanan penyampaian semua aspirasi dan pengaduan masyarakat yang terintegrasi secara Nasional dengan laman akses website www.lapor.go.id</p><p style="text-align:justify;">LAPOR! telah ditetapkan sebagai Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N) berdasarkan Peraturan Presiden Nomor 76 Tahun 2013 dan Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 3 Tahun 2015.</p><p style="text-align:justify;">SP4N – LAPOR! dibentuk untuk merealisasikan kebijakan “no wrong door policy” yang menjamin hak masyarakat agar pengaduan dari manapun dan jenis apapun akan disalurkan kepada penyelenggara pelayanan publik yang berwenang menanganinya.</p><p style="text-align:justify;">Adapun tujuan SP4N adalah agar :</p><ul><li style="text-align:justify;">Penyelenggara dapat mengelola pengaduan dari masyarakat secara sederhana, cepat, tepat, tuntas, dan terkoordinasi dengan baik;</li><li style="text-align:justify;">Penyelenggara memberikan akses untuk partisipasi masyarakat dalam menyampaikan pengaduan; dan</li><li style="text-align:justify;">Meningkatkan kualitas pelayanan publik.</li></ul><p style="text-align:justify;">“Berani LAPOR! Untuk Pelayanan Publik yang Lebih Baik”</p><p style="text-align:center;"><a href="http://www.lapor.go.id/" target="_blank">Lapor Disini</a>&nbsp;</p><p style="text-align:center;"></p><img src="https://rspaw.or.id/wp-content/uploads/2022/07/image.png" alt="undefined" style="float:none;height: auto;width: auto"/><p style="text-align:center;"></p><img src="https://rspaw.or.id/wp-content/uploads/2022/10/Lapor.png" alt="undefined" style="float:none;height: auto;width: auto"/><p style="text-align:center;"></p><iframe width="auto" height="auto" src="https://youtu.be/a-7gO599NfY" frameBorder="0"></iframe><p style="text-align:center;"></p>';

export const visimisi =
  '<p style="text-align:start;"></p>  <img src="https://rspaw.or.id/wp-content/uploads/2020/04/poster2-820x1024.png" alt="undefined" style="float:none;height: auto;width: 100%"/>  <p></p>  <p>Pernyataan makna visi :</p>  <p style="text-align:justify;">Visi tersebut memberi gambaran yang menantang tentang keadaan masa depan yang berisikan cita dan citra yang ingin dicapai. Bahwa RS Paru dr. Ario Wirawan Salatiga melaksanakan pelayanan prima dan paripurna, kuratif dan rehabilitatif, dengan tidak meningkalkan upaya promotif, preventif, serta mampu mengembangkan kemampuan sumber daya manusia, termasuk meningkatkan kemampuan masyarakat terhadap upaya penanganan kesehatan spesialistik respirasi, utamanya kesehatan paru.</p>  <p style="text-align:start;">Penjelasan masing-masing Misi :</p>  <ul>  <li style="text-align:justify;">Adalah tindakan nyata yang dilakukan oleh Rumah Sakit yakni melaksanakan penatalaksanaan pelayanan kesehatan spesialistik respirasi sejak deteksi dini pengobatan, perawatan, sampai dengan tindakan sub spesialistik paru dan pelayanan spesialistik lain yang mendukung pelayanan paru secara paripurna;</li>  <li style="text-align:justify;">Sebagai rumah sakit yang memiliki angka kunjungan yang tinggi, dengan kasus penyakit yang bervariasi serta tersedianya sumber daya manusia yang memadai dan peralatan yang lengkap, terbuka kesempatan bagi institusi pendidikan pada semua strata termasuk LSM yang berkaitan dengan kesehatan paru untuk menjadikan Rumah Sakit Paru dr. Ario Wirawan Salatiga sebagai lahan pendidikan, pelatihan dan penelitian;</li>  <li style="text-align:justify;">Sebagai antisipasi terhadap perkembangan ilmu pengetahuan dan teknologi, perubahan pola penyakit, dan tuntutan masyarakat yang semakin kompleks maka peningkatan kualitas SDM adalah suatu keharusan yang harus dipenuhi rumah sakit;</li>  <li style="text-align:justify;">Peran SDM sebagai inspirator, penggerak dan pelaksana operasionalisasi rumah sakit perlu mendapatkan rangsangan yang memicu peningkatan kinerja beserta berupa penghargaan riil yaitu peningkatan kesejahteraan pegawai dan keluarga sebagai bagian dan tanggung jawab rumah sakit.</li>  </ul>  <p style="text-align:start;">TUJUAN :<br></p>  <p style="text-align:start;">Tujuan Rumah Sakit Paru dr. Ario Wirawan Salatiga adalah “ Mewujudkan masyarakat sehat, mandiri dan berkeadilan di bidang kesehatan paru dan pernapasan berasaskan gotong royong. <p style="text-align:center;"></p> ';

export const struktur =
  '<p style="text-align:start;"></p><img src="https://rspaw.or.id/wp-content/uploads/2022/09/struktur-organisasi-1024x472.png" alt="undefined" style="float:none;height: auto;width: 100%"/><p></p>';

export const direksi =
  '<p style="text-align:start;"></p><img src="https://rspaw.or.id/wp-content/uploads/elementor/thumbs/jajaran-direksi-2-pu5qfz9ehtu48qzxpiicm6pxv21kua7oesu8u1zgqm.png" alt="undefined" style="float:none;height: auto;width: 100%"/><p></p>';

export const upaya =
  '<h1 style="text-align:start;">6 Upaya Menjadikan RSPAW Lebih Baik dan Membanggakan</h1><p style="text-align:start;">1. Membangun komitmen bersama</p><p style="text-align:start;">2. Memperkuat Manajemen</p><p style="text-align:start;">3. Penataan lingkungan kerja</p><p style="text-align:start;">4. Meningkatkan dan mengembangkan pelayanan</p><p style="text-align:start;">5. Tertib administrasi dan keuangan</p><p style="text-align:start;">6. Meningkatkan kesejahteraan pegawai</p>';

export const video =
  '<h1 style="text-align:start;"></h1><iframe width="100%" height="500px" src="https://www.youtube.com/embed/NA1BwOpvLX0?feature=oembed" frameBorder="0"></iframe><p><span style="color: rgb(55,0,10);background-color: rgb(255,255,255);font-size: 18px;font-family: Karla, sans-serif;">Silakan klik link di bawah ini untuk melihat video lainnya di chanel Youtube RSPAW</span></p><p><a href="https://www.youtube.com/@rspawsalatiga/videos" target="_blank"><span style="color: rgb(55,0,10);background-color: rgb(255,255,255);font-size: 18px;font-family: Karla, sans-serif;">https://www.youtube.com/@rspawsalatiga/videos</span></a><span style="color: rgb(55,0,10);background-color: rgb(255,255,255);font-size: 18px;font-family: Karla, sans-serif;"> </span></p>';

export const maklumatPelayanan = [
  { url: imageMaklumatIGD, name: "Standar Pelayanan Instalasi IGD" },
  { url: imageMaklumatRajal, name: "Standar Pelayanan Instalasi Rawat Jalan" },
  { url: imageMaklumatRanap, name: "Standar Pelayanan Instalasi Rawat Inap" },
  {
    url: imageMaklumatRadiologi,
    name: "Standar Pelayanan Instalasi Radiologi",
  },
  {
    url: imageMaklumatLaborat,
    name: "Standar Pelayanan Instalasi Laboratorium",
  },
  {
    url: imageMaklumatRehab,
    name: "Standar Pelayanan Instalasi Rehabilitasi Medik",
  },
  { url: imageMaklumatFarmasi, name: "Standar Pelayanan Instalasi Farmasi" },
  { url: imageMaklumatGizi, name: "Standar Pelayanan Instalasi Gizi" },
  { url: imageMaklumatRumahSakit, name: "Maklumat Pelayanan Rumah Sakit" },
  { url: imageMaklumatIntensif, name: "Maklumat Pelayanan Rawat Intensif" },
  { url: imageMaklumatIBS, name: "Maklumat Pelayanan Instalasi Bedah Sentral" },
  { url: imageMaklumatRekamMedic, name: "Maklumat Pelayanan Rekam Medic" },
  { url: imageMaklumatAmbulans, name: "Maklumat Pelayanan Ambulans" },
  { url: imageMaklumatJenazah, name: "Maklumat Pelayanan Pemulasaran Jenazah" },
  {
    url: imageMaklumatKesling,
    name: "Maklumat Pelayanan Kesehatan Lingkungan",
  },
  {
    url: imageMaklumatPPI,
    name: "Maklumat Pelayanan Pencegahan Dan Pengandalian Infeksi",
  },
  {
    url: imageMaklumatPembayaran,
    name: "Maklumat Pelayanan Pembayaran Kepada Pihak Ketiga",
  },
  {
    url: imageMaklumatPulang,
    name: "Maklumat Pelayanan Loket Pembayaran Pasien Pulang Rawat Inap",
  },
  { url: imageMaklumatLaundry, name: "Maklumat Pelayanan Laundry" },
  {
    url: imageMaklumatHumas,
    name: "Maklumat Pelayanan Instalasi Humas & Pelayanan Pelanggan",
  },
];

export const wbkFoto = [
  { url: wbkGizi, name: "Instalasi Gizi" },
  { url: wbkSatpam, name: "Satuan Keamanan" },
  { url: wbkGudang, name: "Gudang Farmasi & Umum" },
  { url: wbkPerawat, name: "R. sedijanto" },
  { url: wbkCM, name: "Instalasi Rekam Medik" },
  { url: wbkIGD, name: "IGD" },
  { url: wbkFisio, name: "Instalasi Rehabilitasi Medik (Fisioterapi)" },
  { url: wbkFarmasi, name: "Instalasi Farmasi" },
  { url: wbkKeuangan, name: "Keuangan" },
];
