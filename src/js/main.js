/**
 * Created by vaibhavsrivastava on 7/1/17.
 */
$ = jQuery = require('jquery');

var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./component/home/homePage');
var About = require('./component/about/aboutPage');
var Header = require('./component/common/header');

(function (win) {
    "use strict";
    var App = React.createClass({
        render: function () {
            var Child;
            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                default:
                    Child = Home;
            }
            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }

    });

    function render() {
        var route = window.location.hash.substr(1);
        ReactDom.render(<App route={route}/>, document.getElementById('app'));
    }

    window.addEventListener('hashchange', render);
    render();
})(window);
