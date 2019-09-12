import React from 'react';
import './App.scss';

function PrivacyList(){
  const privacyItems = [
    {
      title:"View your full name",
      rank:"one",
      description:"A common piece of information used by many applications to identify you."
    },
    {
      title:"View your email address",
      rank:"one",
      description:"A common piece of information used by many applications to be able to identify & contact you."

    },
    {
      title:"View your likes and comments",
      rank:"two",
      description:"Personal information that developers can use this information to customize your experience in their app."
    },
    {
      title:"View your contacts and their basic info",
      rank:"three",
      description:"This gives the developer access to basic information (name and email address) of people & organizations in your contact list. Please always be respectful of other's information and make sure this is an application you can trust."
    }
  ]

  function expandPrivacy(listItem){
    document.getElementById(listItem).classList.toggle("active");
    var content = document.getElementById(listItem).lastChild;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  const listItems = privacyItems.map((item, index) => (
    <li key={index} id={"privacyItem"+index} className="privacyItem">
      <div className="privacyItemMain" onClick={() => {expandPrivacy("privacyItem"+index)}}>
        <h3 className="privacyItemTitle">{item.title}</h3>
        <div className={"rankBox " + item.rank}>
        </div>
      </div>
      <div className="privacyItemDescription">
        <p>{item.description}</p>
      </div>
    </li>
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );

}

function PrivacyCard(){
  return(
    <div className = "PrivacyCard">
      <div className = "PrivacyCardTitle">
        <h1>NewApp would like to connect to your SocialAccount</h1>
        <h3>It would like to:</h3>
      </div>
      <PrivacyList />
      <div className="PrivacyAction">
        <button id="accept">Allow</button>
        <button it="deny">Deny</button>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <PrivacyCard />
    </div>
  );
}

export default App;
