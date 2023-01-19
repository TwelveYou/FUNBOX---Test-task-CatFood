import React from 'react'
export default class Card extends React.Component{
  constructor(props) {
    super(props);  
    this.state = {
      message_calling: <p>Чего сидишь? Порадуй котэ, <span class="like-link" onMouseOver={()=>(this.startHover)} onClick={()=>(this.Chose())} onMouseLeave={()=>(this.finishHover())} >купи.</span></p>,
      changed_slogan: 'Сказочное заморское яство',
      chosen: 0
    };

    this.startHover = this.startHover.bind(this);  // При наведении на элемент
    this.finishHover = this.finishHover.bind(this); // При уходе с элемента
    this.Chose = this.Chose.bind(this); // При клике
  }

  componentDidMount(){ // При монтировании элемента, если элемент недоступен, соответственно его расскрашивать
    if(this.props.item.available == 0){
      document.getElementById("on_hover_change_color_border-"+this.props.index).style.background = 'linear-gradient(135deg, transparent 25px, #b3b3b3 0)';
      document.getElementById("on_hover_change_color_circle-"+this.props.index).style.backgroundColor = '#b3b3b3';

      document.getElementById("unit-pack__white_plate"+this.props.index).style =
      'background: linear-gradient(135deg, transparent 25px, rgba(255,255,255,0.5) 0);       width: 320px;       height: 480px;       border-radius: 15px;  position: absolute;';

      this.setState({
        message_calling: 'Печалька,'+ this.props.item.taste +' закончился.'
      });
      document.getElementById("color_if_not_available"+this.props.index).style.color = "#ffff66";
    }   
  }

  startHover(){ // При наведении на элемент
    if(this.props.item.available == 1){
      if (this.state.chosen == 0){
        document.getElementById("on_hover_change_color_border-"+this.props.index).style.background = 'linear-gradient(135deg, transparent 25px, #2ea8e6 0)';
        document.getElementById("on_hover_change_color_circle-"+this.props.index).style.backgroundColor = '#2ea8e6';
      } else{
        document.getElementById("on_hover_change_color_border-"+this.props.index).style.background = 'linear-gradient(135deg, transparent 25px, #e62e7a 0)';
        document.getElementById("on_hover_change_color_circle-"+this.props.index).style.backgroundColor = '#e62e7a';
        this.setState({
          changed_slogan: "Котэ не одобряет?"        
        });
        document.getElementById("on_hover_change_color_slogan-"+this.props.index).style.color = '#e62e7a';
      }
    }    
  }
  
  finishHover(){ // При уходе с элемента
    if(this.props.item.available == 1){
      if (this.state.chosen == 0){
        document.getElementById("on_hover_change_color_border-"+this.props.index).style.background = 'linear-gradient(135deg, transparent 25px, #1698d9 0)';
        document.getElementById("on_hover_change_color_circle-"+this.props.index).style.backgroundColor = '#1698d9';
        this.setState({
          message_calling: <p>Чего сидишь? Порадуй котэ, <span class="like-link" onMouseOver={this.startHover} onClick={this.Chose} onMouseLeave={this.finishHover} >купи.</span></p>
        });
        
      } else {
        document.getElementById("on_hover_change_color_border-"+this.props.index).style.background = 'linear-gradient(135deg, transparent 25px, #d91667 0)';
        document.getElementById("on_hover_change_color_circle-"+this.props.index).style.backgroundColor = '#d91667';            
        this.setState({        
          message_calling: this.props.item.select_message   
        });
      }
      this.setState({
        changed_slogan: 'Сказочное заморское яство',
      });
      document.getElementById("on_hover_change_color_slogan-"+this.props.index).style.color = '#666666';
    }   
  }

  Chose(){ // При клике
    if(this.props.item.available == 1){
      if (this.state.chosen == 0){
        this.setState({
          chosen: 1        
        })
        document.getElementById("on_hover_change_color_border-"+this.props.index).style.background = 'linear-gradient(135deg, transparent 25px, #e62e7a 0)';
        document.getElementById("on_hover_change_color_circle-"+this.props.index).style.backgroundColor = '#e62e7a';
      } else {
        this.setState({
          chosen: 0,
          changed_slogan: 'Сказочное заморское яство'       
        })
        document.getElementById("on_hover_change_color_slogan-"+this.props.index).style.color = '#666666';
        document.getElementById("on_hover_change_color_border-"+this.props.index).style.background = 'linear-gradient(135deg, transparent 25px, #2ea8e6 0)';
        document.getElementById("on_hover_change_color_circle-"+this.props.index).style.backgroundColor = '#2ea8e6';
      }
    }
  }
  
  render() { 
    return(
      <div class="unit" id={"item-"+this.props.index}>   
          <div class="unit-pack__wraper-border" id={"on_hover_change_color_border-"+this.props.index}
            onMouseEnter={this.startHover}
            onMouseLeave={this.finishHover}
            onClick={this.Chose}
          >
              <div class="unit-pack__wraper">                    
                  <div class="unit-pack">
                      <div class="unit-pack-discription"> 
                          <div class="unit-pack-discription-logo">
                              <p class="unit-pack-discription-logo__slogan" 
                                id={"on_hover_change_color_slogan-"+this.props.index}>
                                    {this.state.changed_slogan}
                              </p>
                              <p class="unit-pack-discription-logo__company-name">Нямушка</p>    
                              <p class="unit-pack-discription-text__taste">{this.props.item.taste}</p>                                                                    
                          </div>
                          <div class="unit-pack-discription-text"> 
                              <p class="unit-pack-discription-text__num-portion"> <span class="bold">{this.props.item.num_portion}</span> порций</p> 
                              <p class="unit-pack-discription-text__gift">  <span class="bold">{this.props.item.count_gift}</span> {this.props.item.gift} в подарок</p> 
                          </div>
                      </div> 
                      <div class="unit-pack-weight" id={"on_hover_change_color_circle-"+this.props.index}> 
                          <p class="unit-pack-weight__value">{this.props.item.kilo}</p>
                          <p class="unit-pack-weight__unit-type">кг</p>
                      </div>                            
                  </div>
              </div>
              <div id={"unit-pack__white_plate"+this.props.index}></div> {/*Полупрозрачная плашка, если не доступен продукт */} 
          </div>       

          <div class="unit__call-to-action" id={"color_if_not_available"+this.props.index}>
            {this.state.message_calling}
          </div>
      </div>
    );
  };
}