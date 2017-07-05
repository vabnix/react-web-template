"use strict";

var React = require('react');
var AuthorApi = require('../../../data/authorApi');

var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };

    },
    componentWillMount: function () {
        this.setState({authors: AuthorApi.getAllAuthors()});
    },

    render: function () {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            )
        };

        return (
            <div>
                <h1>Authors</h1>
                <div className="panel panel-default">
                    <div className="panel-heading">Author List</div>
                    <div className="panel-body">
                        <table className="table table-hover">
                            <thead>
                            <th>ID</th>
                            <th>Name</th>
                            </thead>
                            <tbody>
                            {this.state.authors.map(createAuthorRow, this)}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
});

module.exports = Authors;