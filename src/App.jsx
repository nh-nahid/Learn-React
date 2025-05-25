import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {

  let number = 64;
  const city = ['Dhaka' ,'London','Lahor','Istanbul'];
  return (
    <div>

  {/* Import */}

        {/* <Header/>
        <Hero/>
        <ContactForm/>
        <Footer/> */}
 
 {/* Ternary */}
        {/* {number>80? <h1>Brilliant</h1>: <h1>Average</h1>} */}

{/* IIFE */}
{/* 
          {(()=>{
              if(number >= 80 ){
                return <h1>A+</h1>
              }else if(number >= 60 && number <80){
                return <h1>A</h1>
              }
          })()} */}


{/* JSX Loop */}
      <ul>
        {
        city.map((item,i)=>{
            return <li key={i.toString()}>{item}</li>
        })
      }
      </ul>

    </div>
  );
};

export default App;