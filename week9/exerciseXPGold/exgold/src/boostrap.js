import React from 'react';



class BootstrapCard extends React.Component {
    render() {
        const {title, imageUrl, buttonLabel, buttonUrl,description} = this.props
        return (
             <div className="card m-5" style={{width: '30rem'}}>
                <img className="card-img-top" src={imageUrl} alt={buttonLabel} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={buttonUrl} class="btn btn-primary">go to wiki</a>
                </div>
            </div>
    )
    }
}

export default BootstrapCard

