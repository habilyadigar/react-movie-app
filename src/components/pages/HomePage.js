import React, { Component } from "react";
import { ActorList } from './../ActorList';


export default class HomePage extends Component {
    state = {
        actors : [{
            name: "Natalie Portman",
            description: "Natalie Portman is the first person born in the 1980s to have won the Academy Award for Best Actress (for Siyah Kuğu (2010)).",
            photo: "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_UY317_CR11,0,214,317_AL_.jpg",
        },
        {

            name: "Cate Blanchett",
            description: "Cate Blanchett was born on May 14, 1969 in Melbourne, Victoria, Australia, to June (Gamble), an Australian teacher and property developer, and Robert DeWitt Blanchett, Jr., an American advertising executive, originally from Texas. She has an older brother and a younger sister. When she was ten ...",
            photo: "https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY209_CR2,0,140,209_AL_.jpg"
        },
        {  
            name: "Emma Stone",
            description: "Emily Jean 'Emma' Stone was born in Scottsdale, Arizona, to Krista (Yeager), a homemaker, and Jeffrey Charles Stone, a contracting company founder and CEO. She is of Swedish, German, and British Isles descent. Stone began acting as a child as a member of the Valley Youth Theatre in Phoenix, Arizona...",
            photo: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_UX140_CR0,0,140,209_AL_.jpg"

        }
    ]
    }
  render() {
    return (
      <div className = "App">
        <h2 className = "text-center">BEST ACTRESSES</h2>
        <ActorList  actors = { this.state.actors}/>
      </div>
    );
  }
}
