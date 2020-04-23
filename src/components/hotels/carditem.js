import React from 'react'
import { 
    MdPlace, 
    MdAirlineSeatIndividualSuite,
    MdAttachMoney
} from "react-icons/md";

const CardItem = ({item}) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={item.photo} alt="Sainte Jeanne Boutique & Spa" />
            </figure>
        </div>
        <div className="card-content">
            <p className="title is-4">{item.name}</p>
            <p>{item.description}</p>
            <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
            <div className="control">
                <div className="tags has-addons">
                    <span className="tag is-medium is-info"><MdPlace/></span>
                    <span className="tag is-medium">{`${item.city}, ${item.country}`}</span>
                </div>
            </div>
            <div className="control">
                <div className="tags has-addons">
                <span className="tag is-medium is-info"><MdAirlineSeatIndividualSuite/></span>
                <span className="tag is-medium">{`${item.rooms} Habitaciones`}</span>
            </div>
            </div>
            <div className="control">
                <div className="tags">
                <span className="tag is-medium is-info">
                    {new Array(item.price).fill(0).map((p) => (
                        <MdAttachMoney/>
                    ))}
                </span>
                </div>
            </div>
            </div>
        </div>
        <div className="card-footer">
            <button className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</button>
        </div>
    </div>
)

export default CardItem;