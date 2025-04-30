
// declarasi type type Table yang bisa di gunakan 
type User= {
   id: number,  
   nama:string,
   email:string,  
   password:string 
}
type Task = {
   id : number, 
   user_id : User.id, 
   tipe_task : string,  
   description:string,
   status:string,  
   deadline:string,  
}

// class untuk management data yang terconct ke database
export class DataManagementst{
  public table_name:string;

  constructor(table_name:string,){
    this.table_name = table_name
  }
  connectDB(){
    return //connetxt
  }

  getAllData(){
    //cuery
    
  } 
  getDataId(id:number){
    //query
    
  }
  saveData() {

  }
  deleteData(){

  }
  
}

