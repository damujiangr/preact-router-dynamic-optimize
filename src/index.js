import Router from 'preact-router';
import { h, render, Component } from 'preact';
import Match, { Link } from 'preact-router/match';
import createHashHistory from 'history/createHashHistory';
// Lazy loading (code splitting)
import AsyncRoute from 'preact-async-route';
import registerServiceWorker from './registerServiceWorker';
import Home from './App';
import './index.css';

const Loading = () => <div>Loading...</div>;

// Router
// activeClassName="active" need style
// click same router repeatedly will trigger warning: Warning: Hash history cannot PUSH the same path;
class BasicExample extends Component {
    render() {
        return (
            <div>
                <Match>
                    {({ matches, path, url }) => (
                        <pre>current location: {url}</pre>
                    )}
                </Match>
                <nav>
                    <Link activeClassName="active" href="/">Home</Link> |
                    <Link activeClassName="active" href="/about">About</Link> |
                    <Link activeClassName="active" href="/third">Third</Link> |
                    <Link activeClassName="active" href="/topics">Topics</Link> |
                </nav>
                <Router history={createHashHistory()}>
                    <Home exac path="/" />
                    <AsyncRoute
                        path="/about/"
                        getComponent={() => import('./components/About').then(module => module.default)}
                        loading={Loading}
                    />
                    <AsyncRoute
                        path="/third/"
                        getComponent={() => import('./components/Third').then(module => module.default)}
                        loading={Loading}
                    />
                    <AsyncRoute
                        path="/topics/"
                        getComponent={() => import('./components/Topics').then(module => module.default)}
                        loading={Loading}
                    />
                </Router>
            </div>
        )
    }
};




render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
