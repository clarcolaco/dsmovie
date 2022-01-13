import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import './styles.css'

export default function Listing() {
      return (

            // pagina principal - setada na rota
            // componente de arrow <Arrow /> - paginação
            <>


                  <Pagination />

                  <div className="container">
                        <div className="row">
                              <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                                    <MovieCard />
                              </div>
                              <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                                    <MovieCard />
                              </div>
                              <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                                    <MovieCard />
                              </div>
                              <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                                    <MovieCard />
                              </div>
                              <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                                    <MovieCard />
                              </div>
                              <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                                    <MovieCard />
                              </div>
                              <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                                    <MovieCard />
                              </div>
                              <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                                    <MovieCard />
                              </div>

                        </div>
                  </div>
            </>
      );
}