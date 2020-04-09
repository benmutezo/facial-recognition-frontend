import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav"
import Logo from "./components/Logo/Logo"
import ImgLinkForm from "./components/ImgLinkForm/ImgLinkForm"
import Welcome from "./components/Welcome/Welcome"
import Particles from "./components/Particles/Particles" //Background particles thingy
import FaceReco from "./components/FaceReco/FaceReco"
import Signin from "./components/Signin/Signin"
import Register from './components/Register/Register';

const initialState = {
  input: " ",
  imageURL: " ",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    entries: 0,
    email: "",
    joined: ""
  }

}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        entries: data.entries,
        email: data.email,
        joined: data.joined
      }
    })
  }

  onInPutChange = e => {
    const value = e.target.value
    this.setState({ input: value })

  }


  calculateFaceLocation = (data) => {
    const clarifyFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputImage")
    const height = Number(image.height)
    const width = Number(image.width)
    return {
      leftCol: clarifyFace.left_col * width,
      topRow: clarifyFace.top_row * height,
      rightCol: width - (clarifyFace.right_col * width),
      bottomRow: height - (clarifyFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState)
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }

    this.setState({ route: route })
  }

  onPicsubmit = () => {
    this.setState({ imageURL: this.state.input })
    fetch("https://agile-ocean-22305.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.imageURL
      })
    })
      .then(res => res.json())
      .then(resp => {
        if (resp) {
          fetch("https://agile-ocean-22305.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(res => res.json())
            .then(count => {
              this.setState(Object.assign(
                this.state.user, { entries: count }))
            })
            .catch(console.log())
        }
        this.displayFaceBox(this.calculateFaceLocation(resp))
      })
      .catch(error => console.log(error))

  }
  render() {
    const { isSignedIn, imageURL, box, route } = this.state
    return (
      <div>
        <Particles />
        <Nav onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {
          route === "home" ?
            <div>
              <Logo />
              <Welcome name={this.state.user.name} entries={this.state.user.entries} />
              <ImgLinkForm onInPutChange={this.onInPutChange} onPicsubmit={this.onPicsubmit} />
              <FaceReco box={box} imageURL={imageURL} />
            </div> :
            (
              route === "signin" || route === "signout"
                ?
                <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            )

        }

      </div>
    )
  }
}
export default App;
