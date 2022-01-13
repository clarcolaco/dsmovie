// forma abaixo de chamar uma img formato iso como um componente
import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

export default function Pagination() {
      return (

            // componente com as arrows
            // apenas para mudança das paginas

            <div className="dsmovie-pagination-container">
                  <div className="dsmovie-pagination-box">
                        <button className="dsmovie-pagination-button" disabled={true} >
                              <Arrow />
                        </button>
                        <p>{`${1} de ${3}`}</p>
                        <button className="dsmovie-pagination-button" disabled={false} >
                              <Arrow className="dsmovie-flip-horizontal" />
                        </button>
                  </div>
            </div>);
}