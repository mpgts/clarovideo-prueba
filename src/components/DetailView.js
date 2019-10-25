import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDetail } from '../actionCreators';

import '../assets/css/detailMovie.css';

var miMapa = new Map();

class DetailMovie extends Component {

    constructor(props){
        super(props);
        this.props.loadDetail(this.props.match.params.id);
    }

    valoresCastellano() {
        
        miMapa.set("Actor", "Actor(es)");
        miMapa.set("Director", "Director(es)");
        miMapa.set("Writer", "Escritor(es)");
        miMapa.set("Producer", "Productor(es)");
    }
    
    render() {

        this.valoresCastellano();

        const {detail} = this.props;

        return (
            <div>
                <div className=" container lienzo-detail-movie">
                    <div className="row ">

                        <div className="col-md-5">
                            <h1 className="big-title"> {detail.title} </h1>
                            <img src={detail.image_small} alt="" className="img-detail" />
                        </div>
                    
                        <div className="col-md-7 resenia">
                            <p>
                                <strong>
                                    <span className="title-year">
                                        {detail.title} ({'extendedcommon' in detail && detail.extendedcommon.media.publishyear})
                                    </span>
                                </strong>
                            </p>
                            
                            <p>
                                <strong>
                                    <span className="duracion"> Duración: {detail.duration} </span>
                                </strong>
                            </p>
                                    
                            <p> Título original: {'extendedcommon' in detail && detail.extendedcommon.media.originaltitle} </p>
                                    
                            <p>{detail.large_description}</p>

                            <div>
                                {'extendedcommon' in detail && detail.extendedcommon.roles.role.map((index, key) =>
                                    <p>
                                        <strong>{miMapa.get(index.name)}: </strong>
                                        { index.talents.talent.map(item => <span className="properties">{item.fullname}</span>)}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        detail: state.detail,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadDetail: (id) => dispatch(loadDetail(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);