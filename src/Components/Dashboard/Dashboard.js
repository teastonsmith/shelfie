import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>Dashboard</p>
      </div>
    )
  }
}

// A user should be able to add a name and a price for the product.

// A user should be able to add an image URL for the product.

// There should be an image preview that displays the image added by the user.
// If there is no image URL, a default image should appear in the preview.
// The image container should remain the same size.

// A user should be able to click the 'Cancel' button to clear all three input boxes.

// A user should be able to click the 'Add to Inventory' button.
// This should save the product in the database.
// This should clear the input boxes