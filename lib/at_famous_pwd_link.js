Template.atFamousPwdLink.replaces("atPwdLink");

Template.atPwdLink.events({
  'click #at-famous-forgotPwd': function(event, t) {
    event.preventDefault();
    Router.go(AccountsTemplates.getRouteName('forgotPwd'));
  },
});
