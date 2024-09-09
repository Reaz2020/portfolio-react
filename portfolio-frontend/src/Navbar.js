import { NavLink } from "react-router-dom";



const Navbar = () => {
    return ( 

<div className="main-div container mx-auto">


    {/* nav */}
      <nav className="bg-lime-50   flex justify-between items-center p-4">

       <div className=" w-12 h-12 rounded-full bg-orange-400 "></div>

          <ul className="flex  gap-10 justify-center">

            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/travels">travels</NavLink></li>
   
          </ul>



          <div className="btn bg-orange-500">Hire me</div>

      </nav>




       
    

</div>
      



     );
}
 
export default Navbar;