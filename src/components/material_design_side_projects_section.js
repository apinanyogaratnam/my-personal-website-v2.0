import React, { Component } from 'react';
import '../css/material_design_side_projects.scss';
import data from './data/data';
import Card from './card'

class MaterialDesignSideProjectsSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }
    
    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        // add conditional for infinite cards
        this.setState({
            property: data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        // add conditional for infinite cards
        this.setState({
            property: data.properties[newIndex]
        })
    }

    render () {
        const {properties, property} = this.state;

        return (
            <div className="personal-projects-container">
                <button
                    onClick={() => this.prevProperty()}
                    disabled={property.index === 0}
                >Prev</button>
                <button
                    onClick={() => this.nextProperty()}
                    disabled={property.index === data.properties.length-1}
                >Next</button>

                <section className="cards-container">
                    <div className="card-slider">
                        <div className="cards-slider-wrapper" style={{
                            transform: `translateX(-${property.index*(100/properties.length)}%)`
                        }}>
                            {
                            properties.map(property => <Card key={property._id} property={property} />)
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MaterialDesignSideProjectsSection
