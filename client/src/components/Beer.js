import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Header, List, Container, Loader, Segment } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';
import {Link} from 'react-router-dom';


// const styles = {
//   complete: {
//     textDecoration: 'line-through',
//     color: 'grey'
//   },

//   pointer: {
//     cursor: 'pointer',
//     color: 'red'
//   }
// }

const styles = {
    scroller: { height: '60vh', overflow: 'auto' }
  }

class Beer extends React.Component{
    state= {beer: [], show: 'All', page: 1, totalPages: 0}
    getUrl = ""

    componentDidMount(){
        let parts = this.props.location.pathname.split('/');
        this.getUrl = "/api/beer/" + parts[parts.length - 1]


        axios.get(this.getUrl)
        .then( res => {
            let { data, headers } = res;
            this.setState({ beer
    : data.entries, totalPages:5})
            this.props.dispatch({ type: 'HEADERS', headers})
        });
    }

loadMore = () => {
    const page = this.state.page + 1;
    axios.get('api/all_beer/:name?page=${page}')
    .then( ({data, headers}) => {
        this.setState( state => {
            return { beer
    : [ ...state.beer, ...data.beer], 
                    page: state.page + 1}
        })
    this.props.dispatch({ type: 'HEADERS', headers})
    });
}

render() {
    let { beer, show, page, totalPages} = this.state;
    return (

        // <Container>
        //     <div>hello there</div>
        //     </Container>
        
           
            <Container>
                <div>
                    <h1 style={{color: ' darkgoldenrod' }}>{`Beer information:`}</h1>
                    {/* <Header as="h1" >{this.getUrl}</Header> */}
                    <div>
                    {/* <ul> */}
                        { beer.map ( b => 
                           <div>
                           <h2 style={{color: 'darkcyan'}}>{b.name_display}</h2>
                           <h4 style={{color: 'darkcyan'}}>{b.style.name}</h4>
                           <p></p>
                           <p style={{color: 'darkolivegreen'}}>{b.style.description}</p>
                           </div>
                        )}
                    {/* </ul> */}
                    </div>
                </div>
            </Container>
          
        
    )
}
}

export default connect()(Beer);