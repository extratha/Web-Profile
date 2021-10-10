import React, { Component } from 'react';
import './style/App.css';
import profile from './img/profile.png';
import 'bootstrap/dist/css/bootstrap.min.css';


class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hr1: 'trans--grow hr1',
      count: 0
    }
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')

    let particlesArray;

    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 80) * (canvas.width / 80)
    }
    window.addEventListener('mousemove',
      function (event) {
        mouse.x = event.x
        mouse.y = event.y
      }
    )


    const init = () => {
      particlesArray = []
      let numberOfParticles = (canvas.height * canvas.width) / 3000
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 4) + 1
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2)
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2)
        let directionX = (Math.random() * 5 - 2.5)
        let directionY = (Math.random() * 5 - 2.5)
        let color = 'rgba(0,0,0,0.1)'
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color, ctx, canvas, mouse))
      }
    }

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x)
            * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[a].y) *
              (particlesArray[a].y - particlesArray[b].y))

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            ctx.storkeStyle = 'rgba(140, 85, 43,0.1)'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
      }
      connect()
    }

    window.addEventListener('resize',
      function () {
        canvas.width = canvas.width
        canvas.height = canvas.height
        mouse.radius = ((canvas.height / 80) * (canvas.height / 80))
        init()
      }
    )
    
    window.addEventListener('mouseout' ,
      function() {
        mouse.x = undefined
        mouse.y = undefined
      }
    )

    init()
    animate()

    console.log(this.props, particlesArray)
  }
  render() {
    var timeout = setTimeout(() => {
      this.setState({
        hr1: 'trans--grow grow hr1',
        count: 1
      })

    }, 500);

    if (this.state.count > 0) {
      clearTimeout(timeout);
    }

    return (
      <div className="Intro" id='intro'>
        <div className="intro-wrap">
          <div className="profile-img-sec dropshadow">
            <div className="profile-img-wrap">
              <div className="crooked">
                <img src={profile} alt=" " className="profile-img"></img>
              </div>
            </div>

          </div>
          <div className="intro-blank-top">
            <canvas id="canvas1" />
          </div>

          <div className="intro-floor shadow">
            <div className="name">
              <p className="first-name " >
                THAKORN
              </p>
              <div className="nameline">
                <hr className={this.state.hr1} ></hr>
              </div>
              <p className="last-name " >
                THONGRAK
              </p>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Intro;

class Particle {
  constructor(x, y, directionX, directionY, size, color, ctx, canvas, mouse) {
    this.x = x;
    this.y = y;
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.color = color
    this.ctx = ctx
    this.canvas = canvas
    this.mouse = mouse
    console.log(ctx)
  }
  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.ctx.fillStyle = 'rgba(0,0,0,0.3)'
    this.ctx.fill()
  }
  update() {
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.directionY = - this.directionY
    }

    let dx = this.mouse.x - this.x;
    let dy = this.mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy)
    if (distance < this.mouse.radius + this.size) {
      if (this.mouse.x < this.x && this.x < this.canvas.width - this.size * 10) {
        this.x += 10
      }
      if (this.mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10
      }
      if (this.mouse.y < this.y && this.y < this.canvas.height - this.size * 10) {
        this.y += 10
      }
      if (this.mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10
      }
    }

    this.x += this.directionX
    this.y += this.directionY

    this.draw()
  }
}