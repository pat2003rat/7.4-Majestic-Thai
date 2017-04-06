var React = require('react');
var Backbone = require('backbone');

var OrderCollection = require('../models/models').OrderCollection;
var EntreeCollection = require('../models/models').EntreeCollection;

var MenuContainer = React.createClass({

  getInitialState: function(){
    var entreeCollection = new EntreeCollection();
    var orderCollection = new OrderCollection();
    return {
      entreeCollection: entreeCollection,
      orderCollection: orderCollection
    };
  },
  componentWillMount: function(){
    var newEntreeCollection = this.state.entreeCollection;
    newEntreeCollection.add([
      {orderitem: 'Fried WonTons | Keī́yw thxd', description: 'Deep fried wontons stuffed with ground chicken, served with homemade sweet and sour sauce.', price: 11.25},
      {orderitem: 'Fried Chicken Dumplings | Keī́yw thxd kị̀', description: "Deep fried wonton skins stuffed with ground chicken and vegetables, served with homemade sweet and sour sauce. Chef Chanchai's Personal Favorite. Really makes you take a deep look at yourself and think, am I IN Thailand?", price: 9.95},
      {orderitem: 'Thai Style Pork Jerky | Moo Dad Deaw', description: 'Deep fried marinated pork, served with homemade spicy sauce served with jasmine sweet and sour rice.', price: 12.95},
      {orderitem: 'Salmon Love | Plā sælmxn rạk ', description: 'Grilled salmon served under chopped red onions, cilantro, bell peppers in our homemade tangy sauce. The flavors will be swimming in your mouth', price: 14.95},
      {orderitem: 'Tempura | Thempura', description: 'Deep fried shrimp tempura and vegetables, served with homemade sweet and sour sauce. This is just like mom used to make back home. Flavors explode in your mouth', price: 9.95},
      {orderitem: 'Issan Style Beef Jerky| S̄tịl̒ xīs̄ān neụ̄̂x kratuk', description: "Deep fried marinated beef, served with homemade spicy sauce. Chef Dusit's Personal Favorite", price: 14.95},
      {orderitem: 'Garlic Prawns| Kratheīym kûng ', description: 'Deep fried prawns with shells (almost like potato chips), sautéed with our special garlic sauce, topped with ground black pepper. Once you pop, you cannot stop', price: 16.95},
      {orderitem: 'Seafood Pad Ped| P̄hæ̀n pū thale ', description: "Combination seafood with homemade roasted curry paste, lemon grass, straw mushrooms, lime juice and mint leaves. Chef Gamon's Personal Favorite", price: 16.45},
      {orderitem: 'Yellow Curry Noodle| Ǩwyteī̌yw kæng h̄elụ̄xng', description: 'Stir-fried wide rice noodles topped with ground beef, cooked in curry powder, tomatoes, bell peppers, onions and celery.', price: 16.95},
    ]);
    this.setState({itemCollection: newEntreeCollection});
  },
  addOrderItem: function(entreeProps){
    this.state.orderCollection.add(entreeProps.toJSON());
    this.forceUpdate();
  },

  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="nameofplace text-center"> Majestic Thai </h1>
            <h3 className = "addressofplace text-center"> 121 Wong Way Inman, SC 12121 </h3>
            <br></br>
              <div className="col-md-3 menulisting"></div>
              <div className="col-md-6 menulisting">
              <OrderForm orderCollection={this.state.orderCollection}/>
            </div>
          </div>
        </div>
        <div className="col-md-12 menulisting">
        <div className="col-md-6 orderbox text-center">
          <h1 className="entreecolortitle text-center">Entrees</h1>

          <EntreeListings addOrderItem={this.addOrderItem} entreeCollection={this.state.entreeCollection} />
          </div>
          <h1 className="entreecolortitle text-center">Pictures of Entrees</h1>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Fried Wontons </p> <img className ="image" src="./images/friedwontons.jpg"></img>
          </div>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Fried Chicken Dumplings </p> <img className ="image" src="./images/Fried Chicken Dumplings.jpg"> </img>
          </div>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Thai Style Pork Jerky </p> <img className ="image" src="./images/Thai Style Pork Jerky.jpg"> </img>
          </div>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Grilled Salmon </p> <img className ="image" src="./images/Grilled salmon.jpg"> </img>
          </div>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Tempura</p> <img className ="image" src="./images/Tempura.jpg"> </img>
          </div>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Issan Style Beef Jerky</p> <img className ="image" src="./images/Issan Style Beef Jerky.jpg"> </img>
          </div>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Garlic Prawns </p> <img className ="image" src="./images/Garlic Prawns.jpg"> </img>
          </div>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Seafood Pad Ped </p> <img className ="image" src="./images/Seafood Pad Ped.jpg"> </img>
          </div>
          <div className="well foodimage col-md-6 text-center">
            <p className ="colorfoodtitle"> Yellow Curry Noodle </p> <img className ="image" src="./images/Yellow Curry Noodle.jpg"> </img>
          </div>

        </div>
        <div className ="col-md-12 userstories text-center">
        <h1 className = "cookscolornametitle"> About our Cooks</h1>
        <div className="col-xs-12 col-md-4 ">
          <div className = "well backgroundusercolor" >
            <h2>Sarawut May</h2><img src="./images/thaicook1.jpeg" ></img>
            <div className="text_backsplash">
              <p>May is the highest-rated chef in the Michelin guide book.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 ">
          <div className = "well backgroundusercolor" >
            <h2>Ploy Nam</h2><img src="./images/thaicook2.jpg" ></img>
            <div className="text_backsplash">
              <p>Nam is the 2nd highest-rated chef in the Michelin guide book.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 ">
          <div className = "well backgroundusercolor" >
            <h2>Ice </h2><img src="./images/thaicook3.jpg" ></img>
            <div className="text_backsplash">
              <p>Ice is the 3rd highest-rated chef in the Michelin guide book.</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
});

var EntreeListings = React.createClass({

  render: function(){
    var self = this;
    var entreeListings = this.props.entreeCollection.map(function(entreeProps){
      return (
        <div key={entreeProps.cid}>
          <div className="well">
            <span className="listingitems"> {entreeProps.get('orderitem')} </span>
              <ul className="priceofitems">
                <li className="menulistingprice"> Price {entreeProps.get('price')}</li>
                <br></br>
                <button type="button" id="orderbtn" className="btn btn-warning btn-xs" onClick={() => {self.props.addOrderItem(entreeProps)}}>Add to Cart</button>
              </ul>
          <p className="menuitemdescription">{entreeProps.get('description')}</p>
        </div>

      </div>
      );
    });

    return (
      <div>
        {entreeListings}
      </div>
    );
  }
});

var EntreeListings = React.createClass({

  render: function(){
    var self = this;
    var entreeListings = this.props.entreeCollection.map(function(entreeProps){
      return (
        <div key={entreeProps.cid}>
          <div className="well">
            <span className="listingitems"> {entreeProps.get('orderitem')} </span>
                <li className="menulistingprice"> Price {entreeProps.get('price')}</li>
                <br></br>
          <p className="menuitemdescription">{entreeProps.get('description')}</p>
            <button type="button" id="orderbtn" className="btn btn-danger btn-xs" onClick={() => {self.props.addOrderItem(entreeProps)}}>Add to Cart</button>
        </div>

      </div>
      );
    });

    return (
      <div>
        {entreeListings}
      </div>
    );
  }
});


var OrderForm = React.createClass({

  placeOrder: function(){

    var subTotal = this.props.orderCollection.subTotal();

    var orderitems = this.props.orderCollection.map(function(order){
      var name = orderitem.get('orderitem');
      var price = orderitem.get('price');

      return {
        name,
        price
      }
    });

    this.props.orderCollection.create({username:'Client', orderitems: orderitems, subTotal: subTotal,})
    this.props.orderCollection.reset();
    this.forceUpdate();
  },

  render: function(){
    var subTotal = this.props.orderCollection.subTotal();
    var orderItems = this.props.orderCollection.map(function(orderItem){

      return (
        <li className="itemmenulistedprice" key={orderItem.cid}>
          <span>{orderItem.get('orderitem')}</span>
          <span className="order-item-price">${orderItem.get('price')} </span>
        </li>
      )
    });

    return(
      <div className = "col-md-12">
      <div className="well text-center">
        <span className ="orderconfirmation text-center"> Current Order </span>
          <ul className="entree-item-price">{orderItems}</ul>
          <p className="totalamount"> Total Due: ${subTotal} </p>
        <button onClick={this.placeOrder}type="submit" id="placeorder" className="btn btn-danger btn-sm">Place Order </button>
      </div>
      </div>
    );
  }
});

module.exports = {
  MenuContainer
};
