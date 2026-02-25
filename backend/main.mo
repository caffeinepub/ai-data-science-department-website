import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Storage "blob-storage/Storage";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type ContactMessage = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  type ContactInfo = {
    address : Text;
    email : Text;
    phone : Text;
    googleMapsUrl : Text;
  };

  module ContactMessage {
    public func compare(msg1 : ContactMessage, msg2 : ContactMessage) : Order.Order {
      Text.compare(msg1.email, msg2.email);
    };
  };

  let contactMessages = Map.empty<Text, ContactMessage>();

  let contactInfo : ContactInfo = {
    address = "Priyadarshini Engineering College, CRPF Road, Near CRPF Camp, Bara Ghaghra, Bhurkunda, Ranchi, Jharkhand 834010";
    email = "contact@priyadarshini.edu.in";
    phone = "+91 12345 67890";
    googleMapsUrl = "https://maps.google.com/?q=bhurkunda";
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, subject : Text, message : Text) : async Text {
    if (name.size() == 0 or email.size() == 0 or subject.size() == 0 or message.size() == 0) {
      Runtime.trap("All fields are required");
    };

    let contactMessage : ContactMessage = {
      name;
      email;
      subject;
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
