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

class Beers extends React.Component{
    state= {beers: [], show: 'All', page: 1, totalPages: 0}

    componentDidMount(){
        axios.get('/api/all_beers')
        .then( res => {
            let { data, headers } = res;
            this.setState({ beers: data.entries, totalPages:5})
            this.props.dispatch({ type: 'HEADERS', headers})
        });
    }

loadMore = () => {
    const page = this.state.page + 1;
    axios.get('api/all_beers?page=${page}')
    .then( ({data, headers}) => {
        this.setState( state => {
            return { beers: [ ...state.beers, ...data.beers], 
                    page: state.page + 1}
        })
    this.props.dispatch({ type: 'HEADERS', headers})
    });
}

render() {
    let { beers, show, page, totalPages} = this.state;
    return (

        // <Container>
        //     <div>hello there</div>
        //     </Container>
        
           
            <Container>
                <div>
                    <Header as="h1" >{`Top 50 Beers`}</Header>
                 
                    <div>
                        
                    <ul>
                        { beers.slice(0, 50).map ( b => 
                           <li> <Link to={`/beer/${b.name}`}>{b.name_display}
                               
                            </Link>
                            </li>
                        )}
                    </ul>
                    </div>
                </div>
            </Container>
          
        
    )
}
}

export default connect()(Beers);