
// Object Page gunakan untuk menentukan tampilkan Componen (halaman)
//di sini akan menimpan Global var Page
import { writable } from "svelte/store";

export const Page =writable({name:"",time:0})

export const HandlePage=(page)=>{
      Page.set({name:page,time:Date.now()});    
  }


//content untk menghanndle tema gelap terang
export const ThisTema = writable({tema:null,time:0});

//gunakan tipe boolen
export const HandleTema = () => {
  ThisTema.set({tema})
}
