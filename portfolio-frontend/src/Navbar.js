const Navbar = () => {
    return ( 

<div className="main-div">



      <nav className="bg-lime-50   flex justify-between items-center p-4">

       <div className=" w-12 h-12 rounded-full bg-orange-400 "></div>

          <ul className="flex  gap-10 justify-center">
          <li> <a href="#">Home</a> </li>   <li><a href="#">Portfolio</a></li>   <li><a href="#">Contact</a></li>    <li><a href="#"></a></li>
          </ul>
          <div className="btn bg-orange-500">Hire me</div>

       </nav>
       <div class=" flex ">
       <div class="card-body w-1/2 ">
         <h2 class="card-title ">New album is released!</h2>
         <p className="mb-0">Click the button to listen on Spotiwhy app.</p>
        

          <button className="btn w-40 mt-1">hire me</button>


    
     </div>
      <figure className="w-1/2 h-96">
    <img className="w-full h-5/6"
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
      </figure>

</div>



       
    

 </div>
      



     );
}
 
export default Navbar;