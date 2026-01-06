# Task Managers

## Aplikasi yang menyimpan dan mengelola TASK user

## Main Branch

1. `svelte` = ini branch yang menyimpan bagian UI dari App ini yang di buat dengan menggunakan **svelte.js** dan **TailwindsCSS**
2. `server` = bagian server yang di handle dengan **node.js** dan **express.js**

### Page

1. `mainPage` : page utama untuk halaman ini
   ```bash
   index.html # file hasil dari svlete ini
   main.svelte #file utaman untuk folder mainPage
   main.js  # file JS untuk mount main.svelte
   ```
2. `crudPage` : page untuk operasi CRUD untuk setiap Task

```bash
    crud.html # file hasil dari svlete ini
    crud.svelte # file utaman untuk folder crudPage
    crud.js # file js untuk mount crud.svelte
```

### folder | file info

`componentsMain` = folder untuk Menyimpan component component untuk halaman utama \__task Managers_
_MainContent_ = file Yang menghadle file file content di sebehnya
`lib` = folder yg menyimpan component yang di gunakan di component lain _sudah di pilih_

### katagory halaman berdasarkan file

            cek di navbar component

- **index.html** => Entri poin utama untuk file **main.js**
  Menjadi halaman `Dasboard`
  Menjadi hamalan `Manager Task`
  Menjai hamalan `Menber Task`

- **crud.html** => entri untuk pengelolaaan task pada **crud.js**

### example data

- data yang di dapat dari api server dapatkan dari **url tertentu** dan simpan di 1 folder Api
