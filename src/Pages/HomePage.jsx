import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import Counter from "../Components/Counter.jsx";
export default function HomePage(){
    const name="john doe"
    const age=30
    const address="123 Main St"
    console.log(name)

    return(
        <div>
            <Navbar/>
            <Counter/>
            <h1>My name is {name}</h1>
            <h1>My age is {age}</h1>
            <h1>I live in {address}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestias dolore. Cupiditate delectus sapiente obcaecati eveniet, facilis quisquam est vel soluta laborum qui, provident molestiae aperiam expedita quam illo officiis quasi doloribus doloremque impedit recusandae laboriosam. Fugiat officia ex numquam est! Quis magni est nisi, eveniet assumenda autem praesentium. Ad.</p>
            <Footer/>
        </div>
    )
}