import React from 'react';

class ImageCard extends React.Component {
    state={span: 0};

    // Read more about constructor functions, super and refs
    constructor(props){
        super(props);

        this.imageRef = React.createRef();

    }

    //Read more about componentDidMount
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height/1) + 10;

        this.setState({span:spans})
    }

    render(){
        return(
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular} />
            </div>
        );
    };
};

export default ImageCard;