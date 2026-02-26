import Map "mo:core/Map";

module {
  type OldContactMessage = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  type NewContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  type OldActor = {
    contactMessages : Map.Map<Text, OldContactMessage>;
    contactInfo : {
      address : Text;
      email : Text;
      phone : Text;
      googleMapsUrl : Text;
    };
  };

  type NewActor = {
    contactMessages : Map.Map<Text, NewContactMessage>;
    contactInfo : {
      email : Text;
      github : Text;
      linkedin : Text;
    };
  };

  public func run(old : OldActor) : NewActor {
    let newContactMessages = old.contactMessages.map<Text, OldContactMessage, NewContactMessage>(
      func(_key, oldMsg) {
        {
          name = oldMsg.name;
          email = oldMsg.email;
          message = oldMsg.message;
        };
      }
    );

    {
      contactMessages = newContactMessages;
      contactInfo = {
        email = "afnantahibkondalam@gmail.com";
        github = "https://github.com/Afnan-Tahib/FUTURE_DS_01";
        linkedin = "https://www.linkedin.com/in/afnan-tahib-kundalam-7a3881384";
      };
    };
  };
};
