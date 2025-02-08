import './App.css'
import Myimg from './car.png'
function Navbar() {
    return (

        <>
        <nav className="navbar">
            <h1>LOGO</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Others</li>
            </ul>
        </nav>
        <header>
            <h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, illum doloremque illo consequatur maxime inventore exercitationem hic at temporibus. Eligendi laboriosam architecto tenetur, cupiditate nam nihil voluptates earum reiciendis pariatur!
                Tempore, laudantium alias voluptatem sapiente ad accusamus vel quasi nisi vitae adipisci cumque culpa, voluptates asperiores sint officia explicabo quod ex autem incidunt blanditiis tempora, aperiam repellat harum? Quaerat, libero.
                Sequi vero repellat doloremque molestiae soluta nostrum quaerat non dolores facere ratione totam id corporis tenetur quibusdam perspiciatis ducimus autem perferendis facilis commodi est possimus, eum nisi. Eveniet, doloremque ipsum.
                Sint aperiam velit distinctio saepe excepturi eaque similique, quidem pariatur veritatis culpa placeat ullam unde quod qui enim, ipsum tenetur aut obcaecati rerum ad animi nam, dolorem architecto aliquid! Quidem.
                 Quo numquam blanditiis soluta molestias, modi nam consectetur. Eum sapiente maxime, tempore blanditiis necessitatibus repellendus odit tempora assumenda quo quia cum perspiciatis mollitia quae architecto exercitationem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla, deleniti voluptates hic, quos quod, minima quis provident impedit sunt ad eius quia. Magnam possimus cumque deserunt eos itaque necessitatibus?
            </h3>
            <img src="src/car.png" width={"50%"} />
        </header>
        <section>
            {/* <img src="car1.png" width="100%" alt="" /> */}
            
            {/* <img src="src/car.png" style={{width:"300px", height:"300px",background:"green", borderRadius:"100%"}} /> */}
            {/* <img src={Myimg} alt="" /> */}
        </section>
        </>
    )
}
export default Navbar