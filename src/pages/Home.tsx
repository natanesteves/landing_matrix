// Components
import { OurTeam } from "../components/layout/OurTeam";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Doubts } from "../components/Doubts";

// Styles
import "../styles/pages/home.scss";
import { FiHeart } from "react-icons/fi";
import { SiInstagram, SiTwitter } from "react-icons/si";

// Images


export function Home() {
  return (
    <main>
      <section className="presentation">
        <div className="container">
          <div className="descriptionPresentation">
            <h1>Sinopse</h1>
            <p>
            O livro trata das consequências para a sociedade moderna 
            e para cada um de nós da politização da pandemia do 
            covid-19 pela OMS, sob controle da elite Global. Essa 
            realidade artificial criada para todos nós é denominada 
            pelo autor de o "Matrix Global". O desenrolar dessa 
            descoberta ocorre na medida em que ele questiona o mundo 
            a sua volta, e lida como psicólogo clínico com os seus 
            pacientes. Esse questionamento vai para além do 
            questionamento intelectual, pois o leva a explorar a sua 
            própria espiritualidade, assim como os caminhos de sua 
            religião e da fé como um todo. O autor se dá conta de uma
             segunda realidade artificial que nos envolve a partir das
              indagações de um de seus pacientes que é um padre. Essa
               realidade é qualificada por ele como o Matrix do 
               Cristianismo. A obra trata de nossa sobrevivência 
               individual e como espécie humana, neste momento 
               dramático da história de nossa humanidade.
            </p><a href="https://linktr.ee/NatanEsteves">
            <Button  text="Compre"  /> </a>
          </div>
          <div className="imgPresentation"></div>  
          
          
        </div>

       
      </section>
{/*  
      <section className="history" id="history">
        <div className="descHistory">
          <h1>História</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sed, amet molestias eaque voluptatibus, quos similique tempora autem
            accusamus aliquid possimus dolorem. Quam magnam ullam ea aperiam
            quas blanditiis sapiente?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sed, amet molestias eaque voluptatibus, quos similique tempora autem
            accusamus aliquid possimus dolorem. Quam magnam ullam ea aperiam
            quas blanditiis sapiente?
          </p>
        </div>
        <div className="imgHistory"></div>
      </section> */}

     

        
    </main>
  );
}
