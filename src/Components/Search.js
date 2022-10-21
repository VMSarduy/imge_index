import React, { Component } from 'react';

class Search extends Component{

    searchRef =React.createRef();

    handle = (e) =>{
        e.preventDefault();

        
        const data =this.searchRef.current.value;
        // Tomamos el valor del input
        
        this.props.datasearch(data);
        // Lo enviamos al componente principal
    }


    render() {
        return (
            <form onSubmit={this.handle}>
                <div className="row">
                    
                    <div className="form-goup col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Search your Image. -Example: Birds"/>                    
                    </div>                               
                    <div className="form-goup col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search"/>               
                    </div>
                </div>     
            </form>
        );
    }
}
export default Search;