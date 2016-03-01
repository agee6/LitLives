var React = require('react');
var BookSearchBar = require('./BookSearchBar.jsx');
var Modal = require('react-modal');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var PopUpQuestion = React.createClass({
  getInitialState: function() {
   return { modalIsOpen: false };
 },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function(){
    return(
      <section id="popupbody">
        <div id="pop-outer">
          <div id="popup-q">
            <form action="#" id="popup-form" method="post">
              <img id="close" src="/assets/closeButton.png"></img>
                <h2>What book are you reading now</h2>
                  <Modal
                     isOpen={this.state.modalIsOpen}
                     onRequestClose={this.closeModal}
                     style={customStyles} >
                     <div id="searchDiv">
                     <BookSearchBar />
                     </div>

                     <h2>Hello</h2>
                     <button onClick={this.closeModal}>close</button>
                     <div>I am a modal</div>
                     <form>
                       <input />
                       <button>tab navigation</button>
                       <button>stays</button>
                       <button>inside</button>
                       <button>the modal</button>
                     </form>
                   </Modal>
            </form>
          </div>
        </div>
      </section>
    )
  }
})

module.exports = PopUpQuestion;
