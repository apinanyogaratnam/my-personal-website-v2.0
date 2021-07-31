import React, { Component } from 'react'
import '../css/material_design_side_projects.css'

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
        this.setState({
            property: data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    render () {
        const {properties, property} = this.state;

        return (
            <div className="personal-projects-container">
                <button
                    onClick={() => this.nextProperty()}
                    disabled={property.index === data.properties.length-1}
                >Next</button>
                <button
                    onClick={() => this.prevProperty()}
                    disabled={property.index === 0}
                >Prev</button>
            </div>
        );
    }
}

export default MaterialDesignSideProjectsSection
