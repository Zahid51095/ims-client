import {  FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useCart from "../hooks/useCart";


const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: get isAdmin value from the database
    // const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu p-4">
                 {/* {
                    // isAdmin ? 
                    <>
                    <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                    <li><NavLink to="/dashboard/manageItems"><FaList></FaList> Manage Items</NavLink></li>
                    <li><NavLink to="/dashboard/manageBookings"><FaBook></FaBook> Manage Bookings</NavLink></li>
                    <li><NavLink to="/dashboard/users"><FaUsers></FaUsers> All Users</NavLink></li>

                    </>
                    :
                    <>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart {cart.length}</NavLink></li>
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaCalendar></FaCalendar> History</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaCalendar></FaCalendar> Add a Review</NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory"><FaList></FaList> Payment Real History</NavLink></li>

                    
                    </>
                 } */}
                    {/* shared navlinks */}

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaSearch></FaSearch> Menu</NavLink></li>
                    <li><NavLink to="/order/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;