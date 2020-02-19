import React  from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from '../../../containers/home';
import About from '../../../containers/about';
import Header from '../layout/header';
import Footer from '../layout/footer';

interface IProps {
    // readonly user: User
}

interface IState {
    
}

class Routes extends React.Component<IProps,IState> {
    constructor(props: IProps){
        super(props);
        console.log('router starts')
    }

    render() : JSX.Element | null {
        return (
           <main>
               <Header username="Emre"/>
               <section className="page-container">
                   <Switch>
                       <Route exact path="/" component={Home} />
                       <Route path="/about/:userId" component={About} />
                   </Switch>
               </section>
               <Footer />
           </main>
        )
    }
}

export default Routes;