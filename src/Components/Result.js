import React, { Component } from 'react';
import Img from './Img';
import Nexp from './Nexp';

class Result extends Component{
    showImg = () => {

        const image = this.props.image;

        if(image.length === 0) return null;
        console.log(image);
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {image.map(imgs => (
                        <Img
                            key={imgs.id}
                            imgs={imgs}                        
                        />
                    ) ) }
                </div>
                <Nexp
                    previousp={this.props.previousp}
                    nextp={this.props.nextp}
                />
            </React.Fragment>
        )     
    }

    render() {
        return(
        <React.Fragment>
            { this.showImg() }
        </React.Fragment>
        );
    }
}
export default Result;