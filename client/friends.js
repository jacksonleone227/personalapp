Template.friends.helpers({
  friendlist(){return People.find({},{sort:{age:-1}})},
})


Template.friends.events({
  "click #js-submit"(event,instance){
    console.log("Hey it worked!");
    var name = $("#js-name").val();
    var age = $("#js-age").val();
    var favcolor = $("#js-favcolor").val();
    //people.remove(x._id);
    p = {name:name,
        age:age,
        favcolor:favcolor,
        createdAt: new Date(),
        createBy:Meteor.userId()
      };
    console.dir(p);
    People.insert(p);
  },
})
