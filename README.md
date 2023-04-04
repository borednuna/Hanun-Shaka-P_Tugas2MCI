# Hanun-Shaka-P_Tugas2MCI

## Studi Kasus
Schematics ITS mengadakan seminar BST dengan sistem seminar yang memiliki _entity_ seperti _user_, _booking_, tempat duduk, dan sebagainya. Diminta untuk melakukan analisis kebutuhan berupa skema basis data CDM dan PDM, kemudian mengembangkan API yang dapat melakukan _create_, _read_, _update_, dan _delete_ pada basis data yang kemudian di-_deploy_ dalam _scope_ lokal maupun di-_host_ pada sebuah platform.

## Skema Basis Data
Dalam studi kasus ini, diperlukan beberapa tabel yang mencakup tabel _user_, _booking_, _seating_, sesi, dan pembayaran. Dalam tugas ini, diagram relasi dibuat menggunakan _drawio_. _Relation_ antar _entity_ digambarkan dalam CDM berikut. <br/>
![CDM](./img/SeminarSystem_CDM.drawio.svg)

Kemudian, dari CDM tersebut didetailkan lagi dalam PDM berikut. <br/>
![PDM](./img/SeminarSystem_PDM.drawio.svg)

## CRUD API
Dalam project ini, digunakan ExpressJs dan postgresql. Well, walaupun pada pertemuan kedua diajarkan untuk menggunakan XAMPP, saya mengimplementasikannya dengan postgresql. Alasan utamanya karena di kelas MBD saya diminta untuk menggunakan postgresql dan saya rasa tidak ada salahnya mencobanya pada project ini. Referensi yang saya gunakan _mostly_ adalah dokumentasi dari _sequelize_ sendiri mengenai penggunaannya dengan postgresql.

Konfigurasi untuk menghubungkan _backend_ ke _database_ sudah disesuaikan di ```config/database.js```. Untuk project ini, saya sudah membuat user untuk staff Schematics di database postgresql. Konfigurasinya diatur dalam sebuah file ```.env``` seperti pada file ```.env.example```.

## Deployment
Deployment untuk repository dan database project ini menggunakan layanan gratis terbatas dari  [Railway](https://railway.app). Di _production environment_, nama database, _host_, _port_, _username_, serta _password_ disediakan di deployment Postgresql Railway. Link API yang sudah di-_deploy_ ada [disini](hanun-shaka-ptugas2mci-production.up.railway.app) dan dokumentasi Postman-nya ada [disini](https://documenter.getpostman.com/view/13055513/2s93RXr9vE).
