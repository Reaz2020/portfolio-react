const Navbar = () => {
    return ( 

<div className="main-div container mx-auto">



      <nav className="bg-lime-50   flex justify-between items-center p-4">

       <div className=" w-12 h-12 rounded-full bg-orange-400 "></div>

          <ul className="flex  gap-10 justify-center">
          <li> <a href="#">Home</a> </li>   <li><a href="#">Portfolio</a></li>   <li><a href="#">Contact</a></li>    <li><a href="#"></a></li>
          </ul>
          <div className="btn bg-orange-500">Hire me</div>

      </nav>

      {/* banner */}
      <div class=" flex  items-center gap-4">
        {/* writing section */}
       <div class=" w-1/2 ">
         <h2 class="card-title text-6xl ">Hello! This is Md Reaz</h2>
         <p className="mb-0 text-xl">Hello! This is Md Reaz.</p>
          <button className="btn w-40 mt-1 bg-orange-400">more about me</button>
       </div>
       {/* image-holder */}
       <div className="min-h-96 w-1/2 bg-slate-400 border">
        <img src="" alt="" />
       </div>

  

      </div>



       
    

 </div>
      



     );
}
 
export default Navbar;