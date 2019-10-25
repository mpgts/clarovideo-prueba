import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTxtBusq } from '../actionCreators';
import '../assets/css/movieList.css';

class MovieList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            movies_clone: []
        }
        
    }

    initState = (movies) => {

        if (movies.length !== -1) {
            this.setTxtBusq = 3;
            return this.setState({
                movies,
                movies_clone: movies
            })
        }
        return null;
    }

    componentDidMount = () => {
        const { movies } = this.props;
        this.initState(movies);
    }

    UNSAFE_componentWillReceiveProps = ({ movies }) => {
        this.initState(movies);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.txtBusq !== this.props.txtBusq) {
            const {txtBusq} = this.props.txtBusq;
            let searchMovies;
            if(this.props.txtBusq === '') {
                searchMovies = this.state.movies_clone;
            }else {
                searchMovies = this.state.movies_clone.filter(data => (data.title).toLowerCase() === (this.props.txtBusq).toLowerCase());
            }
            this.setState({
                ...this.state,
                movies: searchMovies
            });
        }
    }

    obtenerPeliculas = () => {
        const { movies } = this.state;
        if (movies !== undefined && movies.length > 0) {
            return (movies.map(movie =>
                <div className="col-6 col-md-3 movie-container" key={movie.id}>
                    <div data-tip={movie.title} data-for={movie.id}>
                        <Link to={`/detail-movie/${movie.id}`} title={'Clic para ver detalle [' + movie.title + ']'} className="enlace">
                            <div className="icon-container-hover"></div>
                            <img alt="" src={movie.image_small} className="img-for-pc d-none d-md-block"/>
                            <img alt="" src={movie.image_medium} className="img-for-mobile d-md-none d-sm-block"/>
                        </Link>
                    </div>    
                </div>
            )
            );
        }
    }

    render() {
        let movies = this.obtenerPeliculas();
        return (
            <Container className="ml-container">
                <Row>
                    {movies}
                </Row>  
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        txtBusq: state.txtBusq
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTxtBusq: (value) => dispatch(setTxtBusq(value))
    }
}

export default connect(mapStateToProps)(MovieList);