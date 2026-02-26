import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Storage "blob-storage/Storage";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";
import Migration "migration";

(with migration = Migration.run)
actor {
  include MixinStorage();

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  type ContactInfo = {
    email : Text;
    github : Text;
    linkedin : Text;
  };

  module ContactMessage {
    public func compare(msg1 : ContactMessage, msg2 : ContactMessage) : Order.Order {
      Text.compare(msg1.email, msg2.email);
    };
  };

  let contactMessages = Map.empty<Text, ContactMessage>();

  let contactInfo : ContactInfo = {
    email = "afnantahibkondalam@gmail.com";
    github = "https://github.com/Afnan-Tahib/FUTURE_DS_01";
    linkedin = "https://www.linkedin.com/in/afnan-tahib-kundalam-7a3881384";
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async Text {
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("All fields are required");
    };

    let contactMessage : ContactMessage = {
      name;
      email;
      message;
    };

    contactMessages.add(email, contactMessage);
    "Success! Your message has been sent.";
  };

  public query ({ caller }) func getContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray().sort();
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };
};
