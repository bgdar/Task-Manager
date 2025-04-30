Task manager
bagian server yang menghandle backEnd untuk app ini

### schema 

1. __model__  = folder yang menghadle `data`  yang akan di gunakan di app nantik 
2. __config__ = folder yang menghadle coneksi dengan database
3. __controler__ = folder untuk menghanlde route dan mentimpan sub route di bawah root route misanya => _user/subPath_

### Schema routing
`user/show` => mengembalikan semau data user dari table
`user/login` <= menangkap data
    nama.email,password
`task/show` => mengembalikan semua data dari table task 

### Schema Database untuk Task Manager App
1. **User**  
   - `id` (Primary Key)  
   - `nama`  
   - `email`  
   - `password`  

2. **Task**  
   - `id` (Primary Key)  
   - `user_id` (Foreign Key ke `User.id`)  
   - `judul_task`
   - `priority` (Enum:`low`,`medium`, `hard`)  
   - `description`  
   - `status` (Enum: `pending`, `in-progress`, `completed`)
   - `start_date` (Datetime)
   - `deadline` (Datetime)

3. **Label**  
   - `id` (Primary Key)  
   - `name`  
   - `color_code`  

4. **Task_Label** *(pivot table untuk banyak label dalam satu task)*  
   - `task_id` (Foreign Key ke `Task.id`)  
   - `label_id` (Foreign Key ke `Label.id`)  

