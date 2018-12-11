import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import nofoto from './img/nofoto.jpg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      nama:'',
      foto:'',
    }
  }
  render() {
    let buat = () =>{
      var url = `https://robohash.org/${this.state.nama}`;
      axios.get(url)
      .then(()=>{
        console.log(url);
        this.setState({foto: url})
      }).catch((x)=>{console.log(x)})
    }
    return (
      <div className="App">
        
      <h1 className="text-warning pb-3">LIHAT WAJAH ROBOT MU!</h1>
      <center>
        <input className="form-control mt-3 w-25 text-center" ref="nama" type="text" placeholder="Ketik Nama Anda..." 
        onInput={()=> {
          this.setState({nama:this.refs.nama.value})
        }} />
        </center><br/>
        <button className="btn btn-success" onClick={buat}>Buat Profil Picture!</button>
        <br/>
        <img className="card-img-top mt-3" style={{borderRadius:'100%',border:'1px solid #D3D3D3',
        width:'20%', background:'white'}}
         alt="badge" src={this.state.foto ? this.state.foto : nofoto} />
         
      </div>
    );
  }
}

export default App;
