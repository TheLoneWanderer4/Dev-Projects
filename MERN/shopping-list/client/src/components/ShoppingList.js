import React, { Component } from "react";
import ItemModal from "./itemModal.js";
import PropTypes from "prop-types";

import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions.js";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ItemModal />
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={250} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => this.props.deleteItem(id)}
                  >
                    X
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
