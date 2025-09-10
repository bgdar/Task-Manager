# Task Managers
Aplikasi yang menyimpan dan mengelola TASK user
---

## Main Branch
1. `svelte` = ini branch yang menyimpan bagian UI dari App ini yang di buat dengan menggunakan __svelte.js__ dan __TailwindsCSS__
2. `server` = bagian server yang di handle dengan __node.js__ dan __express.js__

### folder | file info
`componentsMain` = folder untuk Menyimpan component component untuk halaman utama __task Managers_
    _MainContent_ = file Yang menghadle file file content di sebehnya
`lib` = folder yg menyimpan component yang di gunakan di component lain _sudah di pilih_

### katagory halaman berdasarkan file
            cek di navbar component
- __index.html__ => Entri poin utama untuk file __main.js__ 
    Menjadi halaman `Dasboard`
    Menjadi hamalan `Manager Task`
    Menjai hamalan `Menber Task`

- __crud.html__ => entri untuk pengelolaaan task pada __crud.js__

### example data
- data yang di dapat dari api server dapatkan dari __url tertentu__ dan simpan di 1 folder Api

