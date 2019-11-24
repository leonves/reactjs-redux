import React , { Fragment, Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';


class Main extends Component {
    state = {
        repositoryInput: '',
    }

    handleAddRepository = (event) =>
    {
        event.preventDefault();
        this.props.addFavoriteRequest(this.state.repositoryInput);
        this.setState({ repositoryInput: ''});
    }
    
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleAddRepository}>
                    <input 
                    placeholder="usuario/repositório"
                    value = {this.state.repositoryInput}
                    onChange = {e => this.setState({ repositoryInput: e.target.value })}
                    />
                    <button type="submit">Adicionar</button>
                    { this.props.favorites.loading && <span>Carregando</span> }
                </form>
                <ul>
                    {
                        this.props.favorites.data.map(favorite => (
                            <li key={favorite.id}>
                                <p>
                                    <strong>{favorite.name}</strong> ({favorite.description})
                                </p>
                                <a href={favorite.url}>Acessar</a>
                            </li>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => (
    {
        favorites: state.favorites,
    }
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);